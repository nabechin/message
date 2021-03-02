import logging

from flask import Flask, jsonify, request
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
from message.models.room import Message


app = Flask(__name__)
app.config.from_object("message.config.Config")
app.config['SECRET_KEY'] = "eafwufhafeaefaergfarf"
app.config['CORS_HEADERS'] = "Content-Type"
init_db(app)
CORS(app)

jwt = JWT(app, authenticate, identity)

logger = logging.getLogger(__name__)


@app.route("/rooms/<user_id>", methods=["GET"])
def get_groups(user_id: int):
    room_interactor = RoomInteractor(DBRoomRepository(), RoomSerializer())
    rooms = room_interactor.get_rooms_by_user_id(user_id)
    logger.info(rooms)
    return jsonify(rooms)


@app.route("/messages/<room_id>", methods=["GET"])
def get_messages(room_id: int):
    message_interactor = MessageInteractor(DBMessageRepository(), MessageSerializer())
    messages = message_interactor.get_messages_by_room_id(room_id)
    logger.info(messages)
    return jsonify(messages)


@app.route("/messages", methods=["POST"])
def create_message():
    message_dict = request.get_json()
    content = message_dict["content"]
    user_id = message_dict["userid"]
    room_id = message_dict["roomid"]
    message = Message(content, int(user_id), int(room_id))
    message_interactor = MessageInteractor(DBMessageRepository(), MessageSerializer())
    message = message_interactor.create_message(message)
    return jsonify(message)