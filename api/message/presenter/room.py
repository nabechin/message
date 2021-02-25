from message.presenter.i_room import IRoomPresenter


class RoomSerializer(IRoomPresenter):
    def __init__(self):
        pass

    def console(self, rooms):
        room_list = []
        for room in rooms:
            room_list.append({
                "name": room.name,
                "message": room.messages.content,
            })
        return room_list
            