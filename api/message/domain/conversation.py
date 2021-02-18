from abc import ABCMeta, abstractmethod


class IConversationRepository(metaclass=ABCMeta):

    @abstractmethod
    def get_rooms_by_user_id(user_id: int):
        pass
