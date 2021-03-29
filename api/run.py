import logging.config

from message.views.views import app, socketio

logging.config.fileConfig('message/log/logging.ini', disable_existing_loggers=False)


if __name__ == "__main__":
    socketio.run(app, debug=True)
