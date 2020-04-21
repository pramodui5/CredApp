import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "../copyright/Copyright";
import { loginUser } from "./loginActions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      isLogin: false,
    };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ userName: "", password: "" });
    this.props.handleSubmit(this.state);
    //console.log(this.state);
    //this.props.history.push("/dashboard");
  };

  handleLogout = () => {
    this.setState({
      isSuccess: false,
    });
  };

  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  render() {
    const { isShow } = this.state;
    console.log("render=========", this.props);
    //console.log("render=========", props);

    const classes = this.useStyles;

    return (
      <>
        <Container
          component="main"
          maxWidth="xs"
          className={classes.marginTop}
          style={{ marginTop: "10%", textAlign: "center" }}
        >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar} style={{ margin: "0 auto" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
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
                name="userName"
                autoFocus
                onChange={this.handleOnChange}
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
                onChange={this.handleOnChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ marginTop: "16px", marginBottom: "16px" }}
              >
                Sign In
              </Button>
              {!this.state.isLogin ? (
                ""
              ) : (
                <h2>Invalid User name or Password</h2>
              )}
              <Grid container>
                <Grid>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={12}>
            <Copyright />
          </Box>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.userName,
  //isLogin: state.isLogin,
});

const mapDispatchToProps = (dispatch) => {
  return { handleSubmit: (data) => dispatch(loginUser(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
