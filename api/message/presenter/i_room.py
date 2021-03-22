from abc import ABCMeta, abstractmethod

from message.dto.room import CreatedRoom

class IRoomPresenter(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def serialize_rooms(self, rooms: list) -> list:
        pass

    @abstractmethod
    def serialize_room(self, created_room: CreatedRoom):
        pass