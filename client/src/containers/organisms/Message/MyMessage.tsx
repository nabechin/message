import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    mesays: {
      margin: "10px 0",
    },
    created_at: {
      position: "relative",
      top: "7px",
      marginRight: "5px",
      color: "#4d4d4d",
    },
    mycomment: {
      display: "inline-block",
      position: "relative",
      margin: "0 10px 0 0",
      padding: "8px",
      maxWidth: "250px",
      borderRadius: "12px",
      background: "#80d4ff",
      fontSize: "15px",
      "&:after": {
        content: "",
        position: "absolute",
        top: "3px",
        right: "-19px",
        border: "8px solid transparent",
        borderLeft: "18px solid #30e852",
        webkitTransform: "rotate(-35deg)",
        transform: "rotate(-35deg)",
      },
    },
  })
);

interface Props {
  userId: number;
  username: string;
  content: string;
  createAt: string;
}

const MyMessage = (props: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      {" "}
      <div className={classes.mesays}>
        <span className={classes.created_at}>{props.createAt}</span>
        <p className={classes.mycomment}>{props.content}</p>
      </div>
    </div>
  );
};

export default MyMessage;
