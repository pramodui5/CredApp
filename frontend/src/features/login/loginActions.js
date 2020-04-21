import { USER_INFO } from "./loginConstants";

const handleSubmit = (content) => {
  return { type: USER_INFO, payload: content };
};
/* export const loginUser = (content) => {
  return (dispatch) => {
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: content.userName,
        password: content.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer <token>",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(handleSubmit(res));

        if (Object.keys(data).length === 0 && data.constructor === Object) {
          console.log("Invalid user!");
        } else {
          dispatch(handleSubmit(data));
          //this.props.history.push("/dashboard");
        }
      });
  };
}; */

export const loginUser = (content) => {
  return (dispatch) => {
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: content.userName,
        password: content.password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer <token>",
      },
    })
      .then((res) => res.json())
      .then((res) => dispatch(handleSubmit(res)));
  };
};