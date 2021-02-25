from message.models.room import Room
from message.domain.room import IRoomRepository


class DBRoomRepository(IRoomRepository):
    def __init__(self):
        pass

    def get_rooms_by_user_id(self, user_id: int):
        return Room.get_rooms_by_user_id(user_id)
