import React, { useState, useEffect, useRef } from "react";
import { axiosInstance } from "../../../api";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import io from "socket.io-client";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";
import SendIcon from "@material-ui/icons/Send";
import useAuth from "../../../hooks/useAuth";

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
  image: string;
  contentType: number;
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

const MessageRoom = (props: Props): JSX.Element => {
  const socket = io.connect("http://localhost:5000/chat");
  const classes = useStyles();
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { auth, setAuth } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  };

  useEffect(() => {
    const getMessages = async (): Promise<void> => {
      const { data } = await axiosInstance.get(`/messages/${props.room_id}`);
      setMessages(data);
      scrollToBottom();
    };
    socket.on("connect", function (data: { msg: string }) {
      socket.emit("join", { room: props.room_id });
    });
    socket.on("status", function (data: { msg: string }) {
      console.log(data.msg);
    });

    socket.on("message_sent", function () {
      // setMessages((messages) => [...messages, data]);
      console.log("send message success!!!");
      scrollToBottom();
      setMessage("");
    });

    getMessages();
    return () => {
      socket.emit("leave", { room: props.room_id }, function () {
        socket.disconnect();
      });
    };
  }, [props.room_id]);

  // const onSend = async (): Promise<void> => {
  //   const { data } = await axiosInstance.post("/messages", {
  //     content: message,
  //     userid: auth.userId,
  //     roomid: props.room_id,
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   setMessages((messages) => [...messages, data]);
  //   scrollToBottom();
  //   setMessage("");
  // };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData();
      formData.append("userId", "1");
      formData.append("roomId", String(props.room_id));
      formData.append("file", e.target.files[0]);
      const { data } = await axiosInstance.post("/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessages((messages) => [...messages, data]);
      scrollToBottom();
    }
  };

  const onSendMessage = () => {
    console.log("aaa");
    socket.emit("message_send", {
      content: message,
      userId: auth.userId,
      roomId: props.room_id,
    });
  };

  const renderMessages = () => {
    return messages.map((message) => {
      return renderMessage(message);
    });
  };

  const renderMessage = (message: Message): JSX.Element => {
    if (message.userId === auth.userId) {
      return <MyMessage key={message.id} {...message}></MyMessage>;
    } else {
      return <OthersMessage key={message.id} {...message}></OthersMessage>;
    }
  };
  return (
    <>
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
              <a onClick={() => onSendMessage()}>
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
    </>
  );
};

export default MessageRoom;
