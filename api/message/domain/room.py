from abc import ABCMeta, abstractmethod


class IRoomRepository(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_rooms_by_user_id(self, user_id: int):
        pass
