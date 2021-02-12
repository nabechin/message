from flask import Flask, jsonify

from message.database.database import init_db

app = Flask(__name__)
app.config.from_object("message.config.Config")
init_db(app)


@app.route("/", methods=["GET"])
def get_messages():
    messages = [
        "message1",
        "message1",
        "message1"
    ]
    return jsonify(messages), 200
