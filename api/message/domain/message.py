from abc import ABCMeta, abstractmethod

from message.models.room import Message


class IMessageRepository(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_messages_by_room_id(self, room_id: int):
        pass

    @abstractmethod
    def get_get_messages_by_me_and_friend_id(self, user_id:int, friend_id: int):
        pass

    @abstractmethod
    def create_message(self, message: Message):
        pass