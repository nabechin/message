from message.models.room import Participant
from message.domain.participant import IParticipantRepository


class DBParticipantRepository(IParticipantRepository):
    def __init__(self):
        pass

    def get_participants_by_user_id(self, user_id: int):
        return Participant.get_participants_by_user_id(user_id)
