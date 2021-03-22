from message.presenter.i_room import IRoomPresenter
from message.dto.room import CreatedRoom


class RoomSerializer(IRoomPresenter):
    
    def serialize_rooms(self, rooms):
        room_list = []
        for room in rooms:
            room_list.append({
                "id": room.id,
                "name": room.name,
                "message": room.last_message,
            })
        return room_list
            
    def serialize_room(self, create_room: CreatedRoom):
        return {
            "roomId": create_room.get_room_id(),
        }