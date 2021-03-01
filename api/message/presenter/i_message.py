from abc import ABCMeta, abstractmethod

from message.models.room import Message


class IMessagePresenter(metaclass=ABCMeta):
    @abstractmethod
    def serialize_messages(messages: list) -> List[dict]:
        pass

    @abstractmethod
    def serialize_message(message: Message) -> dict:
        pass