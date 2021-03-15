from message.usecase.message import IMessageUsecase
from message.domain.message import IMessageRepository
from message.presenter.i_message import IMessagePresenter
from message.models.room import Message, Room
from message.database.database import db


class MessageInteractor(IMessageUsecase):

    def __init__(self, message_repository: IMessageRepository, message_presenter: IMessagePresenter):
        self.__message_repository = message_repository
        self.__message_presenter = message_presenter

    def get_messages_by_room_id(self, user_id: int):
        messages = self.__message_repository.get_messages_by_room_id(user_id)
        return self.__message_presenter.serialize_messages(messages)
    
    def get_messages_by_me_and_friend_id(self, user_id: int, friend_id: int):
        messages = self.__message_repository.get_get_messages_by_me_and_friend_id(user_id, friend_id)
        return self.__message_presenter.serialize_messages(messages)

    def create_message(self, message: Message):
        try:
            message = self.__message_repository.create_message(message)
            return self.__message_presenter.serialize_message(message)
        except Exception as e:
            db.session.rollback()
            raise e

