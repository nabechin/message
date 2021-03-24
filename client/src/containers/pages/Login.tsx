import React from "react";
import axios from "axios";
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

export interface Credential {
  email: string;
  password: string;
}

interface Auth {
  userId: number;
  accessToken: string;
}

interface Props {
  setAuth: (auth: Auth) => void;
}

const Login = (props: Props): JSX.Element => {
  const loginUser = async (credential: Credential) => {
    const { data } = await axios.post("http://localhost:5000/login", {
      email: credential.email,
      password: credential.password,
      headers: { "Content-Type": "application/json" },
    });
    props.setAuth(data);
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <LoginForm onSubmit={loginUser} />
      </div>
    </Container>
  );
};

export default Login;
