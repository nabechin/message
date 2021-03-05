import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008ae6",
    },
  },
});

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "30%",
    },
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

const Login = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Avatar>
          <LockOutlinedIcon></LockOutlinedIcon>
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            id="outlined-password-input"
            label="Email Address"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
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
      </div>
    </Container>
  );
};

export default Login;
