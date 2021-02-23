from message.usercase.participant import IParticipantUsecase
from message.repository.participant import IParticipantRepository
from message.presenter.i_participant import IParticipantPresenter


class ParticipantInteractor(IParticipantUsecase):

    def __init__(self, participant_repository: IParticipantRepository, participant_presenter: IParticipantPresenter):
        self.__participant_repository = participant_repository
        self.__participant_presenter = participant_presenter

    def get_rooms_by_user_id(self, user_id: int):
        participants = self.__participant_repository.get_participants_by_user_id(user_id)
        return self.__participant_presenter.console(participants)
