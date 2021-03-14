from message.presenter.i_user import IUserPresenter

from message.models.user import User


class UserSerializer(IUserPresenter):
    
    def serialize_user(self, user: User) -> dict:
        user = {
            "id": user.id,
            "name": user.name
        }
        return user