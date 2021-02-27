from abc import ABCMeta, abstractmethod


class IRoomPresenter(metaclass=ABCMeta):
    @abstractmethod
    def console(rooms: list) -> list:
        pass