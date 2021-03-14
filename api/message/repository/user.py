from message.models.user import User
from message.domain.user import IUserRepository


class DBUserRepository(IUserRepository):
    
    def get_user_by_email(self, email: str):
        return User.get_user_by_email(email)