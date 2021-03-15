from message.models.room import Message
from message.domain.message import IMessageRepository


class DBMessageRepository(IMessageRepository):
    def __init__(self):
        pass

    def get_messages_by_room_id(self, user_id: int):
        return Message.get_messages_by_room_id(user_id)
    
    def get_get_messages_by_me_and_friend_id(self, user_id:int, friend_id: int):
        return Message.get_get_messages_by_me_and_friend_id(user_id, friend_id)

    def create_message(self, message: Message):
        return message.add()