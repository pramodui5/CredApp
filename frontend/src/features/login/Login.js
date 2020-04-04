import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import dataLists from "../../data/authData";
import Copyright from "../copyright/Copyright";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dBData: dataLists,
      isSuccess: false,
      userVal: {},
      isShow: true
    };
  }

  handleSubmit = event => {
    const { userVal, dBData } = this.state;
    event.preventDefault();

    const dataValid = dBData.find(
      ({ name, pass }) => name === userVal.name && pass === userVal.password
    );

    if (dataValid) {
      this.setState({
        isSuccess: true,
        isShow: true
      });
      this.props.history.push("/dashboard");
      sessionStorage.setItem("name", userVal.name);
    } else {
      this.setState({
        isShow: false
      });
    }
  };
  handleUserId = event => {
    this.setState({
      userVal: {
        name: event.target.value
      }
    });
  };
  handleUserPassword = event => {
    this.setState({
      userVal: {
        name: this.state.userVal.name,
        password: event.target.value
      }
    });
  };
  handleLogout = () => {
    this.setState({
      isSuccess: false
    });
  };

  useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  render() {
    const { isShow } = this.state;

    const classes = this.useStyles;

    return (
      <>
        <Container
          component="main"
          maxWidth="xs"
          className={classes.marginTop}
          style={{ marginTop: "10%" }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar} style={{ margin: "0 auto" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              style={{ margin: "0 auto" }}
            >
              Sign in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="user_id"
                label="User ID"
                name="user_id"
                autoFocus
                onChange={this.handleUserId}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleUserPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ marginTop: "16px" }}
              >
                Sign In
              </Button>
              {isShow ? "" : <h2>Invalid User name or Password</h2>}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </>
    );
  }
}

export default Login;
