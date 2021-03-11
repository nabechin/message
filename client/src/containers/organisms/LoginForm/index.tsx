import React from "react";
import Button from "@material-ui/core/Button";
import FormHeader from "../../../components/FormHeader";
import LockOutLinedIcon from "@material-ui/icons/LockOpenOutlined";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Credential } from "../../pages/Login";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008ae6",
    },
  },
});

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: "100%",
      marginTop: "3%",
    },
    signin: {
      marginTop: "5%",
      marginBottom: "5%",
      textTransform: "none",
      fontSize: "20px",
    },
    link: {
      textDecoration: "none",
      color: "#008ae6",
    },
  })
);

interface Props {
  onSubmit: (credential: Credential) => void;
}

const LoginForm = (props: Props): JSX.Element => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit, control } = methods;
  const onSubmit = (data: { email: string; password: string }) =>
    props.onSubmit(data);
  return (
    <React.Fragment>
      <FormHeader headerChar="Sign in">
        <LockOutLinedIcon></LockOutLinedIcon>
      </FormHeader>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={
            <TextField
              id="outlined-password-input"
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          }
          name="email"
          control={control}
        />
        <Controller
          as={
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          }
          control={control}
          name="password"
        />

        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.signin}
          >
            Sign in
          </Button>
        </ThemeProvider>
      </form>
      <Grid container>
        <Grid item xs>
          <Link to="/password" className={classes.link}>
            Forgot password
          </Link>
        </Grid>
        <Grid item>
          <Link to="/signup" className={classes.link}>
            Sign up
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default LoginForm;
