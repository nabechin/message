from datetime import datetime

from message.database.database import db
from message.models import sql


class Room(db.Model):
    __tablename__ = "rooms"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, default="")
    participants = db.relationship("Participant", lazy="select",
                                   backref=db.backref("room", lazy="joined"))
    messages = db.relationship("Message", lazy="select",
                               backref=db.backref("message", lazy="joined"))
    is_group = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)

    @classmethod
    def get_rooms_by_user_id(cls, user_id: int) -> list:
        room_list = []
        for row in db.session.execute(sql.GET_ROOMS_QUERY, {"user_id": int(user_id)}):
            room = cls()
            room.name = row[0]
            room.messages.content = row[1]
            room_list.append(room)
        return room_list



class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    create_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey("rooms.id"), nullable=False)


class Participant(db.Model):
    __tablename__ = "participants"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey("rooms.id"), nullable=False)

    @classmethod
    def get_participants_by_user_id(cls, user_id: int):
        return cls.query.filter_by(user_id=user_id).all()
