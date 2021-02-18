from abc import ABCMeta, abstractmethod


class IConversationUsecase(metaclass=ABCMeta):

    @abstractmethod
    def get_rooms_by_user_id(user_id: int):
        pass
