from message.presenter.i_participant import IParticipantPresenter


class ParticipantSerializer(IParticipantPresenter):
    def __init__(self):
        pass

    def console(self, participants):
        participant_list = []
        for participant in participants:
            participant_list.append({
                "name": participant.room.name
            })
        return participant_list
            