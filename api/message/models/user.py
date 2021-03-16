from message.database.database import db
from message.dto.friend import FriendGetData
from message.models import sql


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    participants = db.relationship("Participant", lazy="select",
                                   backref=db.backref("user", lazy="joined"))
    messages = db.relationship("Message", lazy="select",
                               backref=db.backref("user", lazy="joined"))
                               
    @classmethod
    def get_user_by_email(cls, email: str):
        return cls.query.filter_by(email=email).first()

class Friend(db.Model):
    __tablename__ = "friends"

    id = db.Column(db.Integer, primary_key=True)
    requester_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, default=1)
    receiver_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, default=1)
    requester = db.relationship("User", foreign_keys=[requester_id])
    receriver = db.relationship("User", foreign_keys=[receiver_id])

    @staticmethod
    def get_friends(user_id: int):
        friend_list = []
        for row in db.session.execute(sql.GET_FRIENDS_QUERY, {"user_id": user_id}):
            user_id = row[0]
            user_name = row[1]
            room_id = row[2]
            friend_list.append(FriendGetData(user_id, user_name, room_id))
        return friend_list

