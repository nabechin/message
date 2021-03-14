from abc import ABCMeta, abstractmethod

from message.models.user import User

class IUserRepository(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_user_by_email(self, email: str) -> User:
        pass