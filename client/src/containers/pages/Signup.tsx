import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider,
  Theme,
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

const useStyles = makeStyles((theme: Theme) =>
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

const SignUp = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Avatar>
          <PersonAddIcon></PersonAddIcon>
        </Avatar>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                id="outlined-password-input"
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-password-input"
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Confirm password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signin}
            >
              Sign up
            </Button>
          </ThemeProvider>
        </form>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/login" className={classes.link}>
              Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default SignUp;
