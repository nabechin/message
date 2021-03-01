import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import OthersMessage from "./OthersMessage";
import MyMessage from "./MyMessage";
import { time } from "console";

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
      height: "700px",
      textAlign: "right",
      fontSize: "14px",
    },
    messagePallet: {
      height: "190px",
    },
    messageOption: {
      background: "#f2f2f2",
      height: "20%",
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
  const [user_id, setUserId] = useState(1);
  useEffect(() => {
    const getMessages = async () => {
      const { data } = await axios.get("http://localhost:5000/messages/1");
      setMessages(data);
    };
    getMessages();
  }, []);
  const classes = useStyles();
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
  return (
    <div className={classes.root}>
      <div className={classes.groupHeader}>aaa</div>
      <div className={classes.lineBc}>{renderMessages()}</div>
      <div className={classes.messagePallet}>
        <div className={classes.messageOption}></div>
        <div className={classes.message}>
          <textarea className={classes.textarea}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Message;
