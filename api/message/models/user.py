from message.database.database import db


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

class Friend(db.Model):
    __tablename__ = "friends"

    id = db.Column(db.Integer, primary_key=True)
    requester_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, default=1)
    receiver_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False, default=1)
    requester = db.relationship("User", foreign_keys=[requester_id])
    receriver = db.relationship("User", foreign_keys=[receiver_id])

    @classmethod
    def get_friends(cls, user_id: int):
        return cls.query.filter_by(requester_id=user_id)
