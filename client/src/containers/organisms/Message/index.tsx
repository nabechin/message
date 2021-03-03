import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
    },
    groupHeader: {
      height: "40px",
      background: "#f2f2f2",
    },
    lineBc: {
      padding: "20px 10px",
      maxWidth: "1387px",
      height: "500px",
      textAlign: "right",
      fontSize: "14px",
      overflowY: "scroll",
    },
    messagePallet: {
      height: "190px",
    },
    messageOptionContainer: {
      background: "#f2f2f2",
      height: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    messageOptionItem: {
      marginRight: "10px",
    },
    textarea: {
      resize: "none",
      width: "100%",
      border: "none",
      height: "100%",
      outline: "none",
    },
    message: {
      height: "80%",
    },
  })
);

interface Message {
  user_id: number;
  username: string;
  content: string;
}

const Message = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [user_id, setUserId] = useState(1);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  };

  useEffect(() => {
    const getMessages = async () => {
      const { data } = await axios.get("http://localhost:5000/messages/1");
      setMessages(data);
      scrollToBottom();
    };
    getMessages();
  }, []);

  const onSend = async (): Promise<void> => {
    const { data } = await axios.post("http://localhost:5000/messages", {
      content: message,
      userid: "1",
      roomid: "1",
      headers: { "Content-Type": "application/json" },
    });
    setMessages((messages) => [...messages, data]);
    scrollToBottom();
    setMessage("");
  };

  const renderMessages = () => {
    return messages.map((message, key) => {
      return renderMessage(message);
    });
  };
  const renderMessage = (message: Message): JSX.Element => {
    if (message.user_id === user_id) {
      return <MyMessage {...message}></MyMessage>;
    } else {
      return <OthersMessage {...message}></OthersMessage>;
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.groupHeader}>aaa</div>
      <div className={classes.lineBc}>
        {renderMessages()}
        <div ref={messagesEndRef}></div>
      </div>
      <div className={classes.messagePallet}>
        <div className={classes.messageOptionContainer}>
          <div className={classes.messageOptionItem}>
            <a onClick={() => onSend()}>
              <SendIcon></SendIcon>
            </a>
          </div>
        </div>
        <div className={classes.message}>
          <textarea
            className={classes.textarea}
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Message;
