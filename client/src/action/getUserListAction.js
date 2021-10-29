export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_LIST_FAIL = "GET_USER_LIST_FAIL";
export const GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS";
export const GET_USER_LIST_RESET = "GET_USER_LIST_RESET";

export const getUserList = (params) => {
  return { type: GET_USER_LIST, params };
};
export const getUserListFail = (response) => {
  return { type: GET_USER_LIST_FAIL, response };
};
export const getUserListSuccess = (response) => {
  return { type: GET_USER_LIST_SUCCESS, response };
};
export const getUserListReset = () => {
  return { type: GET_USER_LIST_RESET };
};
