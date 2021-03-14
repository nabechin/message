from abc import ABCMeta, abstractmethod


class IFriendPresenter(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def serialize_friends(self, friends: list) -> list:
        pass