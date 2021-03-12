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
    requester = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    receiver = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
