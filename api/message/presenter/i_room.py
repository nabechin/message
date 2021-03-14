from abc import ABCMeta, abstractmethod


class IRoomPresenter(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def console(self, rooms: list) -> list:
        pass