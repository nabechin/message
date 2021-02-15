from flask import Flask, jsonify
from flask_jwt import JWT, jwt_required

import message.models

from message.database.database import init_db
from message.views.auth import authenticate, identity

app = Flask(__name__)
app.config.from_object("message.config.Config")
app.config['SECRET_KEY'] = "eafwufhafeaefaergfarf"
init_db(app)

jwt = JWT(app, authenticate, identity)


@app.route("/", methods=["GET"])
@jwt_required()
def get_messages():
    messages = [
        "message1",
        "message1",
        "message1"
    ]
    return jsonify(messages), 200
