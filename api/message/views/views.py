import datetime
import logging

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

import message.models

from message.database.database import init_db
from message.exceptions import UserNotFoundException
from message.views.auth import authenticate, identity
from message.repository.room import DBRoomRepository
from message.repository.message import DBMessageRepository
from message.repository.friend import DBFriendRepository
from message.repository.user import DBUserRepository
from message.interactor.room import RoomInteractor
from message.interactor.message import MessageInteractor
from message.interactor.friend import FriendInteractor
from message.interactor.user import UserInteractor
from message.presenter.room import RoomSerializer
from message.presenter.message import MessageSerializer
from message.presenter.friend import FriendSerializer
from message.presenter.user import UserSerializer
from message.models.room import Message


app = Flask(__name__)
app.config.from_object("message.config.Config")
app.config['SECRET_KEY'] = "eafwufhafeaefaergfarf"
app.config['CORS_HEADERS'] = ["Content-Type", "Authorization"]

init_db(app)
CORS(app)
jwt = JWTManager(app)

logger = logging.getLogger(__name__)

@app.route("/login", methods=["POST"])
def login():
    logger.info(request.json)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    try:
        authenticate(email, password)
    except UserNotFoundException as e:
        return jsonify({"message": "usernotfound"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


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
    message = Message(content, int(user_id), int(room_id), datetime.datetime.now())
    message_interactor = MessageInteractor(DBMessageRepository(), MessageSerializer())
    message = message_interactor.create_message(message)
    return jsonify(message)


@app.route("/users/<user_id>/friends", methods=["GET"])
def get_friends(user_id: int):
    friend_interactor = FriendInteractor(DBFriendRepository(), FriendSerializer())
    friends = friend_interactor.get_friends(user_id)
    return jsonify(friends)


@app.route("/user/profile", methods=["GET"])
@jwt_required()
def get_users_profile():
    user_email = get_jwt_identity()
    user_interactor = UserInteractor(DBUserRepository(), UserSerializer())
    user = user_interactor.get_user_by_email(user_email)
    return jsonify(user)