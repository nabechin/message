import os

from werkzeug.utils import secure_filename

from message.domain.image import IImageStorage


class LocalStorage(IImageStorage):
    def save(self, image, filename):
        image.save(os.path.join(os.getcwd() + "/static/media/", filename))