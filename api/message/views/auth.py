import logging

from message.models.user import User
from werkzeug.security import safe_str_cmp

logger = logging.getLogger(__name__)


def authenticate(email, password):
    user = User.query.filter_by(email=email).first()
    if user and safe_str_cmp(user.password.encode("utf-8"), password.encode("utf-8")):
        return user


def identity(payload):
    user_id = payload["identity"]
    return User.query.get(user_id)
