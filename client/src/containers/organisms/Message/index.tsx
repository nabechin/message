import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
    },
    groupHeader: {
      height: "40px",
      background: "#f2f2f2",
    },
    groupHeaderFont: {
      fontSize: "30px",
      marginLeft: "10px",
      display: "flex",
      alignItems: "center",
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
      display: "flex",
    },
    fileIcon: {
      marginRight: "10px",
    },
    pointer: {
      cursor: "pointer",
    },
    fileInput: {
      display: "none",
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
  id: number;
  userId: number;
  username: string;
  content: string;
  createAt: string;
}

interface User {
  id: number;
  name: string;
}
interface Props {
  room_id: number | null;
  user: User | null;
}

const Message = (props: Props): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  };

  useEffect(() => {
    const getMessages = async (): Promise<void> => {
      const { data } = await axios.get(
        `http://localhost:5000/messages/${props.room_id}`
      );
      setMessages(data);
      scrollToBottom();
    };
    getMessages();
  }, [props.room_id]);

  const onSend = async (): Promise<void> => {
    const { data } = await axios.post("http://localhost:5000/messages", {
      content: message,
      userid: 1,
      roomid: props.room_id,
      headers: { "Content-Type": "application/json" },
    });
    console.log(data);
    setMessages((messages) => [...messages, data]);
    scrollToBottom();
    setMessage("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const renderMessages = () => {
    return messages.map((message) => {
      return renderMessage(message);
    });
  };
  const renderMessage = (message: Message): JSX.Element => {
    // if (!props.user) {
    //   return <React.Fragment></React.Fragment>;
    // }
    if (message.userId === 1) {
      return <MyMessage key={message.id} {...message}></MyMessage>;
    } else {
      return <OthersMessage key={message.id} {...message}></OthersMessage>;
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.lineBc}>
        {renderMessages()}
        <div ref={messagesEndRef}></div>
      </div>
      <div className={classes.messagePallet}>
        <div className={classes.messageOptionContainer}>
          <div className={classes.messageOptionItem}>
            <div className={classes.fileIcon}>
              <label htmlFor="file-input">
                <AttachFileIcon className={classes.pointer}></AttachFileIcon>
              </label>
              <input
                type="file"
                onChange={handleChange}
                id="file-input"
                className={classes.fileInput}
              ></input>
            </div>
            <div>
              <a onClick={() => onSend()}>
                <SendIcon className={classes.pointer}></SendIcon>
              </a>
            </div>
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
