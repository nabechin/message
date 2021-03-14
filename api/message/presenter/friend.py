from message.presenter.i_friend import IFriendPresenter

import logging

logger = logging.getLogger(__name__)


class FriendSerializer(IFriendPresenter):
    def serialize_friends(self, friends: list) -> list:
        friend_list = []
        for friend in friends:
            friend_list.append({
                "name": friend.receriver.name
            })
        return friend_list