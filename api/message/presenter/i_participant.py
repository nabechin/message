from abc import ABCMeta, abstractmethod


class IParticipantPresenter(metaclass=ABCMeta):
    @abstractmethod
    def console(participants):
        pass