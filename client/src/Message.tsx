import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import logo from "./logo.svg";

const useStyles = makeStyles(() =>
  createStyles({
    lineBc: {
      padding: "20px 10px",
      maxWidth: "450px",
      margin: "15px auto",
      textAlign: "right",
      fontSize: "14px",
      background: "#7da4cd",
    },
    balloon6: {
      width: "100%",
      margin: "10px 0",
      overflow: "hidden",
    },
    chatting: {
      width: "100%",
      textAlign: "left",
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
    mesays: {
      margin: "10px 0",
    },
    mycomment: {
      display: "inline-block",
      position: "relative",
      margin: "0 10px 0 0",
      padding: "8px",
      maxWidth: "250px",
      borderRadius: "12px",
      background: "#30e852",
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
    faceicon: {
      float: "left",
      marginRight: "-50px",
      width: "40px",
    },
    faceiconimg: {
      width: "100%",
      height: "auto",
      borderRadius: "50%",
    },
  })
);

const Message = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.lineBc}>
        <div className={classes.balloon6}>
          <div className={classes.faceicon}>
            <img src={logo} className={classes.faceiconimg} />
          </div>
          <div className={classes.chatting}>
            <div className={classes.says}>
              <p className={classes.otherscomment}>左ふきだし文</p>
            </div>
          </div>
        </div>
        <div className={classes.mesays}>
          <p className={classes.mycomment}>右ふきだし文</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
