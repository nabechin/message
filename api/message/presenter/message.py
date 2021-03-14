from message.presenter.i_message import IMessagePresenter
from message.models.room import Message


class MessageSerializer(IMessagePresenter):
    def serialize_messages(self, messages: list) -> list:
        message_list = []
        for message in messages:
            message_list.append({
                "id": message.id,
                "user_id": message.user.id,
                "username": message.user.name,
                "content": message.content,
            })
        return message_list

    def serialize_message(self, message: Message) -> dict:
        message_dict = {
            "user_id": message.user.id,
            "username": message.user.name,
            "content": message.content
        }
        return message_dict
