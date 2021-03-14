from message.models.user import Friend
from message.domain.friend import IFriendRepository


class DBFriendRepository(IFriendRepository):
    def get_friends(self, user_id):
        return Friend.get_friends(user_id)