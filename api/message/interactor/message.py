from message.usercase.message import IRoomUsecase
from message.repository.room import IMessageRepository
from message.presenter.i_message import IMessagePresenter


class MessageInteractor(IRoomUsecase):

    def __init__(self, message_repository: IMessageRepository, message_presenter: IMessagePresenter):
        self.__message_repository = message_repository
        self.__message_presenter = message_presenter

    def get_rooms_by_user_id(self, user_id: int):
        rooms = self.__message_repository.get_messages_by_room_id(user_id)
        return self.__message_presenter.console(rooms)