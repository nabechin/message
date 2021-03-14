from abc import ABCMeta, abstractmethod

from message.models.user import User

class IUserPresenter(metaclass=ABCMeta):
    
    def __init__(self):
        pass

    @abstractmethod
    def serialize_user(self, user: User) -> dict:
        pass