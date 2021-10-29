import {
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_RESET,
} from "../action/signupAction";

// intialState
const initialState = {
  apiState: "",
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        apiState: "loading",
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        apiState: "error",
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        apiState: "success",
        data: action.response.data,
      };
    case SIGNUP_RESET:
      return initialState;

    default:
      return state;
  }
}
