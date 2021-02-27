from abc import ABCMeta, abstractmethod


class IMessagePresenter(metaclass=ABCMeta):
    @abstractmethod
    def console(messages: list) -> list:
        pass