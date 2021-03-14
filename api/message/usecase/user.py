from abc import ABCMeta, abstractmethod


class IUserUseCase(metaclass=ABCMeta):
    def get_user_by_email(self, email: str) -> dict:
        pass