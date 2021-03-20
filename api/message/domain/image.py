from abc import ABCMeta, abstractmethod


class IImageStorage(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def save(self, image):
        pass