from message.presenter.i_room import IRoomPresenter


class RoomSerializer(IRoomPresenter):
    def __init__(self):
        pass

    def console(self, rooms):
        room_list = []
        for room in rooms:
            room_list.append({
                "id": room.id,
                "name": room.name,
                "message": room.last_message,
            })
        return room_list
            