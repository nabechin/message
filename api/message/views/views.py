import logging

from flask import Flask, jsonify
from flask_jwt import JWT, jwt_required

import message.models

from message.database.database import init_db
from message.views.auth import authenticate, identity
from message.repository.conversation import DBConversationRepository
from message.interactor.conversation import ConversationInteractor

app = Flask(__name__)
app.config.from_object("message.config.Config")
app.config['SECRET_KEY'] = "eafwufhafeaefaergfarf"
init_db(app)

jwt = JWT(app, authenticate, identity)

logger = logging.getLogger(__name__)


@app.route("/", methods=["GET"])
def get_messages():
    messages = [
        "message1",
        "message1",
        "message1"
    ]
    return jsonify(messages), 200


@app.route("/groups/<user_id>", methods=["GET"])
def get_groups(user_id: int):
    conversation_interactor = ConversationInteractor(DBConversationRepository)
    rooms = conversation_interactor.get_rooms_by_user_id(user_id)
    logger.info(rooms)
    return jsonify(rooms)
