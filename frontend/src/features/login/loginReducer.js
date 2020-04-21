import { USER_INFO } from "./loginConstants";

const initialState = {
  userName: undefined,
  createdAt: undefined,
  updatedAt: undefined,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userName: action.payload.user.username,
        createdAt: action.payload.user.createdAt,
        updatedAt: action.payload.user.updatedAt,
      };

    default:
      return state;
  }
};
export default loginReducer;
