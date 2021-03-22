import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CreateRoom from "./CreateRoom";
import MessageRoom from "./MessageRoom";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
    },
  })
);

interface User {
  id: number;
  name: string;
}

interface FriendShip {
  user_id: number;
  friend_id: number;
}

interface Props {
  room_id: number | null;
  user: User | null;
  onCreateTalkClick: () => void;
}

const Message = (props: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.room_id ? (
        <MessageRoom {...props} />
      ) : (
        <CreateRoom onCreateTalkClick={props.onCreateTalkClick} />
      )}
    </div>
  );
};

export default Message;
