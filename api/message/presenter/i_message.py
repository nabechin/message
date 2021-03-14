from abc import ABCMeta, abstractmethod

from message.models.room import Message


class IMessagePresenter(metaclass=ABCMeta):
    def __init__(self):
        pass
    
    @abstractmethod
    def serialize_messages(self, messages: list) -> list:
        pass

    @abstractmethod
    def serialize_message(self, message: Message) -> dict:
        pass