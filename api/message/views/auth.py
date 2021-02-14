from message.models.user import User
from werkzeug.security import safe_str_cmp


def authenticate(email, password):
    user = User.query.filter_by(email=email).first()
    if user and safe_str_cmp(user.password.encode("utf-8"), password.encode("utf-8")):
        return user


def identity(payload):
    email = payload["identity"]
    return User.query.filter_by(email=email).first()
