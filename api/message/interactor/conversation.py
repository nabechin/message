from message.usercase.conversation import IConversationUsecase
from message.repository.conversation import IConversationRepository


class ConversationInteractor(IConversationUsecase):

    def __init__(self, conversation_repository: IConversationRepository):
        self.__conversation_repository = conversation_repository

    def get_rooms_by_user_id(self, user_id: int):
        return self.__conversation_repository.get_rooms_by_user_id(user_id)
