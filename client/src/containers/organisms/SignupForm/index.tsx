import React from "react";
import Button from "@material-ui/core/Button";
import FormHeader from "../../../components/FormHeader";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  createStyles,
  createMuiTheme,
  ThemeProvider,
  Theme,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008ae6",
    },
  },
});

const useStyles = makeStyles((theme: Theme) =>
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

const SignupForm = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <FormHeader headerChar="Sign up">
        <PersonAddIcon></PersonAddIcon>
      </FormHeader>
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
    </React.Fragment>
  );
};

export default SignupForm;
