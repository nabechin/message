from message.models.room import Room, Participant
from message.domain.room import IRoomRepository
from message.dto.room import CreateRoom, CreatedRoom
from message.database.database import db


class DBRoomRepository(IRoomRepository):
    def __init__(self):
        pass

    def get_rooms_by_user_id(self, user_id: int):
        return Room.get_rooms_by_user_id(user_id)

    def create_room(self, create_room: CreateRoom):
        room = Room()
        room.is_group = create_room.get_is_group()
        room.add()
        db.session.flush()
        participant = Participant()
        participant.user_id = create_room.get_creater_id()
        participant.room_id = room.id
        participant.add()
        participant = Participant()
        participant.user_id = create_room.get_friend_id()
        participant.room_id = room.id
        participant.add()
        created_room = CreatedRoom(room.id)
        return created_room
