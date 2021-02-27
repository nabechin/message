import logging

from flask import Flask, jsonify
from flask_jwt import JWT, jwt_required
from flask_cors import CORS

import message.models

from message.database.database import init_db
from message.views.auth import authenticate, identity
from message.repository.room import DBRoomRepository
from message.repository.message import DBMessageRepository
from message.interactor.room import RoomInteractor
from message.interactor.message import MessageInteractor
from message.presenter.room import RoomSerializer
from message.presenter.message import MessageSerializer

app = Flask(__name__)
app.config.from_object("message.config.Config")
app.config['SECRET_KEY'] = "eafwufhafeaefaergfarf"
init_db(app)
CORS(app)

jwt = JWT(app, authenticate, identity)

logger = logging.getLogger(__name__)


@app.route("/rooms/<user_id>", methods=["GET"])
def get_groups(user_id: int):
    room_repository = DBRoomRepository()
    room_presenter = RoomSerializer()
    room_interactor = RoomInteractor(room_repository, room_presenter)
    rooms = room_interactor.get_rooms_by_user_id(user_id)
    logger.info(rooms)
    return jsonify(rooms)


@app.route("/messages/<room_id>", methods=["GET"])
def get_messages(room_id: int):
    message_repository = DBMessageRepository()
    message_presenter = MessageSerializer()
    message_interactor = MessageInteractor(message_repository, message_presenter)
    messages = message_interactor.get_messages_by_room_id(room_id)
    logger.info(messages)
    return jsonify(messages)