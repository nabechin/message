from abc import ABCMeta, abstractmethod


class IParticipantRepository(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_participants_by_user_id(self, user_id: int):
        pass
