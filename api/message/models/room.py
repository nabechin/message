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
    latest_message = db.Column(db.String(255), nullable=True, default="")
    is_group = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now)

    @classmethod
    def get_rooms_by_user_id(cls, user_id: int) -> list:
        room_list = []
        for row in db.session.execute(sql.GET_ROOMS_QUERY, {"user_id": int(user_id)}):
            room = cls()
            room.id = row[0]
            room.name = row[1]
            room.last_message = row[2]
            room_list.append(room)
        return room_list

    @classmethod
    def update_latest_message(cls, id: int, latest_message: str):
        room = cls.query.get(id)
        room.latest_message = latest_message
        room.updated_at = datetime.now()        
class Message(db.Model):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    create_at = db.Column(db.DateTime, nullable=False, default=datetime.now)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey("rooms.id"), nullable=False)

    def __init__(self, content: str, user_id: int, room_id: int, create_at: datetime):
        self.content = content
        self.user_id = user_id
        self.room_id = room_id
        self.create_at = create_at

    @classmethod 
    def get_messages_by_room_id(cls, room_id: int) -> list:
        return cls.query.filter_by(room_id=room_id).all()
    
    def add(self):
        db.session.add(self)
        Room.update_latest_message(self.room_id, self.content)
        db.session.commit()
        return self


class Participant(db.Model):
    __tablename__ = "participants"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey("rooms.id"), nullable=False)

    @classmethod
    def get_participants_by_user_id(cls, user_id: int):
        return cls.query.filter_by(user_id=user_id).all()
