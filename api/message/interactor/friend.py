from message.usecase.friend import IFriendUseCase
from message.domain.friend import IFriendRepository
from message.presenter.i_friend import IFriendPresenter



class FriendInteractor(IFriendUseCase):

    def __init__(self, friend_repository: IFriendRepository, friend_presenter: IFriendPresenter):
        self.__friend_repository = friend_repository
        self.__friend_presenter = friend_presenter


    def get_friends(self, user_id):
        friends = self.__friend_repository.get_friends(user_id)
        return self.__friend_presenter.serialize_friends(friends)