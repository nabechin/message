from message.usecase.image import IImageUseCase
from message.domain.message import IMessageRepository
from message.domain.image import IImageStorage
from message.models.room import Message
from message.presenter.i_message import IMessagePresenter


class ImageInteractor(IImageUseCase):
    
    def __init__(self, message_repository: IMessageRepository, image_storage: IImageStorage, message_presenter: IMessagePresenter):
        self.__message_repository = message_repository
        self.__image_storage = image_storage
        self.__message_presenter = message_presenter

    def create_image(self, message: Message, image, filename: str):
        message = self.__message_repository.create_message(message)
        self.__image_storage.save(image, filename)
        return self.__message_presenter.serialize_message(message)
