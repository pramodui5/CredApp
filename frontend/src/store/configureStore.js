import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import loginReducer from "../features/login/loginReducer";

const loadState = () => {
  saveState();
  try {
    const savedState = localStorage.getItem("state");
    if (savedState === null) {
      return undefined;
    }

    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const workingState = JSON.stringify(state);

    localStorage.setItem("state", workingState);
  } catch (err) {
    console.log(err);
  }
};

const savedState = loadState();

export const configureStore = () => {
  const store = createStore(
    loginReducer,
    savedState,
    compose(applyMiddleware(logger, thunk))
  );
  return store;
};
