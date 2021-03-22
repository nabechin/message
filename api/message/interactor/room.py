from message.usecase.room import IRoomUsecase
from message.database.database import db
from message.dto.room import CreateRoom
from message.domain.room import IRoomRepository
from message.presenter.i_room import IRoomPresenter


class RoomInteractor(IRoomUsecase):

    def __init__(self, room_repository: IRoomRepository, room_presenter: IRoomPresenter):
        self.__room_repository = room_repository
        self.__room_presenter = room_presenter

    def get_rooms_by_user_id(self, user_id: int):
        rooms = self.__room_repository.get_rooms_by_user_id(user_id)
        return self.__room_presenter.serialize_rooms(rooms)

    def create_room(self, create_room: CreateRoom):
        created_room = self.__room_repository.create_room(create_room)
        db.session.commit()
        return self.__room_presenter.serialize_room(created_room)
