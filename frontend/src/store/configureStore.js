import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../features/login/loginReducer";

export const configureStore = () => {
  const store = createStore(loginReducer, applyMiddleware(thunk));

  return store;
};
