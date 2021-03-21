from abc import ABCMeta, abstractmethod
from message.dto.room import CreateRoom

class IRoomRepository(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_rooms_by_user_id(self, user_id: int):
        pass

    @abstractmethod
    def create_room(self, create_room: CreateRoom)
        pass
