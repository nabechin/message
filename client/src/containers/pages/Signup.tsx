import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SignupForm from "../organisms/SignupForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "30%",
    },
  })
);

const SignUp = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <SignupForm></SignupForm>
      </div>
    </Container>
  );
};

export default SignUp;
