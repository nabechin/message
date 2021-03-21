import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, styled } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

const CreateRoomButton = styled(Button)({
  marginTop: "30%",
  width: "100px",
  background: "#80d4ff",
  color: "white",
  textTransform: "none",
  fontSize: "20px",
});

const CreateRoom = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CreateRoomButton variant="contained">talk</CreateRoomButton>
    </div>
  );
};

export default CreateRoom;
