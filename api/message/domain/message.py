from abc import ABCMeta, abstractmethod


class IMessageRepository(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_messages_by_room_id(self, room_id: int):
        pass