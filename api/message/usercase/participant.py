from abc import ABCMeta, abstractmethod


class IParticipantUsecase(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def get_rooms_by_user_id(user_id: int):
        pass
