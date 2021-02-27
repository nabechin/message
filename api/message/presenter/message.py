from message.presenter.i_message import IMessagePresenter


class MessageSerializer(IMessagePresenter):
    def __init__(self):
        pass

    def console(self, messages: list) -> list:
        message_list = []
        for message in messages:
            room_list.append({
                "username": message.user.name
                "user_name": message.content,
            })
        return message_list