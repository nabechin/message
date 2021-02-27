from message.presenter.i_message import IMessagePresenter


class MessageSerializer(IMessagePresenter):
    def __init__(self):
        pass

    def console(self, messages: list) -> list:
        message_list = []
        for message in messages:
            message_list.append({
                "user_id": message.user.id,
                "username": message.user.name,
                "content": message.content,
            })
        return message_list