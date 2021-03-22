class CreateRoom:
    def __init__(self, is_group: int, creater_id: int, friend_id: int):
        self.__is_group = is_group
        self.__creater_id = creater_id
        self.__friend_id = friend_id

    def get_is_group(self):
        return self.__is_group
    
    def get_creater_id(self):
        return self.__creater_id

    def get_friend_id(self):
        return self.__friend_id

    
class CreatedRoom:
    def __init__(self, room_id: int):
        self.__room_id = room_id

    def get_room_id(self):
        return self.__room_id