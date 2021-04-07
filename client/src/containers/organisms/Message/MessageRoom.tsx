import React, { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";
import SendIcon from "@material-ui/icons/Send";
import useAuth from "../../../hooks/useAuth";
import useMessage from "../../../hooks/useMessage";

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
  room_id: number;
  user: User | null;
}

const MessageRoom = (props: Props): JSX.Element => {
  const {
    messages,
    text,
    setText,
    setRoomId,
    onSend,
    handleChange,
    messagesEndRef,
  } = useMessage();
  const { auth } = useAuth();
  useEffect(() => {
    setRoomId(props.room_id);
  });
  const classes = useStyles();

  const renderMessages = () => {
    return messages.map((message: Message) => {
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
                onChange={(e) => handleChange(props.room_id, e)}
                id="file-input"
                className={classes.fileInput}
              ></input>
            </div>
            <div>
              <a onClick={() => onSend(props.user, props.room_id)}>
                <SendIcon className={classes.pointer}></SendIcon>
              </a>
            </div>
          </div>
        </div>
        <div className={classes.message}>
          <textarea
            className={classes.textarea}
            onChange={(event) => setText(event.target.value)}
            value={text}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default MessageRoom;
