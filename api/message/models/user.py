from message.database.database import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    rooms = db.relationship("Room", lazy="select",
                            backref=db.backref("user", lazy="joined"))
    messages = db.relationship("Message", lazy="select",
                               backref=db.backref("user", lazy="joined"))
