class FriendGetData():
    def __init__(self, user_id: int, name: str, room_id: int):
        self.__user_id = user_id
        self.__name = name
        self.__room_id = room_id

    def get_user_id(self):
        return self.__user_id

    def get_name(self):
        return self.__name

    def get_room_id(self):
        return self.__room_id
