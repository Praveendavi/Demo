import { combineReducers } from "redux";

// reducer
import getUserList from "./reducer/getUserListReducer";
import getUserDetail from "./reducer/getUserDetailReducer";

export default combineReducers({
  getUserList,
  getUserDetail,
});
