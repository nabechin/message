from abc import ABCMeta, abstractmethod


class IMessageUsecase(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_messages_by_room_id(room_id: int):
        pass