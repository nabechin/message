import logging.config

from message.views.views import app

logging.config.fileConfig('message/log/logging.ini', disable_existing_loggers=True)


if __name__ == "__main__":
    app.run(debug=True)
