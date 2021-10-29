// action
import {
  GET_USER_DETAIL,
  GET_USER_DETAIL_FAIL,
  GET_USER_DETAIL_SUCCESS,
  GET_USER_DETAIL_RESET,
} from "../action/getUserDetailAction";

// initialState
const initialState = {
  apiState: "",
  list: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAIL:
      return {
        ...state,
        apiState: "loading",
      };
    case GET_USER_DETAIL_FAIL:
      return {
        ...state,
        apiState: "error",
      };
    case GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        apiState: "success",
        data: action.response.data,
      };
    case GET_USER_DETAIL_RESET:
      return initialState;
    default:
      return state;
  }
}
