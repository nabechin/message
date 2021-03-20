from abc import ABCMeta, abstractmethod
from message.models.room import Message


class IImageUseCase(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def create_image(self, message: Message, image):
        pass
