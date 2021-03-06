import React from "react";
import Container from "@material-ui/core/Container";
import LoginForm from "../organisms/LoginForm";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "30%",
    },
  })
);

const Login = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <LoginForm />
      </div>
    </Container>
  );
};

export default Login;
