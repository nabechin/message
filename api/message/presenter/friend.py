from message.presenter.i_friend import IFriendPresenter

import logging

logger = logging.getLogger(__name__)


class FriendSerializer(IFriendPresenter):
    def serialize_friends(self, friends: list) -> list:
        friend_list = []
        for friend in friends:
            friend_list.append({
                "friendId": friend.get_user_id(),
                "name": friend.get_name(),
                "roomId": friend.get_room_id()
            })
        return friend_list