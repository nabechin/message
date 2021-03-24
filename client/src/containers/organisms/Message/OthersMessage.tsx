import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    balloon6: {
      width: "100%",
      margin: "10px 0",
      overflow: "hidden",
    },
    chatting: {
      width: "100%",
      textAlign: "left",
    },
    faceicon: {
      float: "left",
      marginRight: "-50px",
      width: "40px",
    },
    says: {
      display: "inline-block",
      position: "relative",
      margin: "0 0 0 50px",
      padding: "10px",
      maxWidth: "250px",
      borderRadius: "12px",
      background: "#edf1ee",
      "&:after": {
        content: "",
        display: "inline-block",
        position: "absolute",
        top: "3px",
        left: "-19px",
        border: "8px solid transparent",
        borderRight: "18px solid #edf1ee",
        webkitTransform: "rotate(35deg)",
        transform: "rotate(35deg)",
      },
    },
    otherscomment: {
      margin: "0",
      padding: "0",
    },
    created_at: {
      position: "relative",
      top: "7px",
      marginRight: "5px",
      color: "#4d4d4d",
    },
  })
);

interface Props {
  userId: number;
  username: string;
  content: string;
  image: string;
  contentType: number;
  createAt: string;
}

const OthersMessage = (props: Props): JSX.Element => {
  const classes = useStyles();
  const renderContent = (): JSX.Element => {
    if (props.contentType === 0) {
      return (
        <div className={classes.says}>
          <p className={classes.otherscomment}>{props.content}</p>
        </div>
      );
    } else if (props.contentType === 1) {
      return (
        <div>
          <img
            src={`http://localhost:5000/images/${props.image}`}
            style={{ width: "100px", height: "100px" }}
          ></img>
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <div>
      <div className={classes.balloon6}>
        <div className={classes.faceicon}>
          <Avatar></Avatar>
        </div>
        <div className={classes.chatting}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default OthersMessage;
