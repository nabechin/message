from abc import ABCMeta, abstractmethod


class IFriendUseCase(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_friends(self, user_id: int):
        pass