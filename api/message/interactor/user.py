from message.usecase.user import IUserUseCase
from message.domain.user import IUserRepository
from message.presenter.i_user import IUserPresenter

class UserInteractor(IUserUseCase):
    def __init__(self, user_repository: IUserRepository, user_presenter: IUserPresenter):
        self.__user_repository = user_repository
        self.__user_presenter = user_presenter

    def get_user_by_email(self, email: str) -> dict:
        user = self.__user_repository.get_user_by_email(email)
        return self.__user_presenter.serialize_user(user)