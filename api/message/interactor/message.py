from message.usecase.message import IMessageUsecase
from message.repository.message import IMessageRepository
from message.presenter.i_message import IMessagePresenter
from message.models.room import Message


class MessageInteractor(IMessageUsecase):

    def __init__(self, message_repository: IMessageRepository, message_presenter: IMessagePresenter):
        self.__message_repository = message_repository
        self.__message_presenter = message_presenter

    def get_messages_by_room_id(self, user_id: int):
        rooms = self.__message_repository.get_messages_by_room_id(user_id)
        return self.__message_presenter.serialize_messages(rooms)
    
    def create_message(self, message: Message):
        message = self.__message_repository.create_message(message)
        return self.__message_presenter.serialize_message(message)