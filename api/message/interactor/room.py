from message.usecase.room import IRoomUsecase
from message.domain.room import IRoomRepository
from message.presenter.i_room import IRoomPresenter


class RoomInteractor(IRoomUsecase):

    def __init__(self, room_repository: IRoomRepository, room_presenter: IRoomPresenter):
        self.__room_repository = room_repository
        self.__room_presenter = room_presenter

    def get_rooms_by_user_id(self, user_id: int):
        rooms = self.__room_repository.get_rooms_by_user_id(user_id)
        return self.__room_presenter.console(rooms)
