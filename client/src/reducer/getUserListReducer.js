// action
import {
  GET_USER_LIST,
  GET_USER_LIST_FAIL,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_RESET,
} from "../action/getUserListAction";

// initialState
const initialState = {
  apiState: "",
  list: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        apiState: "loading",
      };
    case GET_USER_LIST_FAIL:
      return {
        ...state,
        apiState: "error",
      };
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        apiState: "success",
        data: action.response.data,
      };
    case GET_USER_LIST_RESET:
      return initialState;
    default:
      return state;
  }
}
