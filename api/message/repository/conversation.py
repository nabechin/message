from message.models.room import Participant
from message.domain.conversation import IConversationRepository


class DBConversationRepository(IConversationRepository):

    def get_rooms_by_user_id(user_id: int):
        return Participant.get_rooms_by_user_id(user_id)
