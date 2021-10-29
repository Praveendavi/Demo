export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const GET_USER_DETAIL_FAIL = "GET_USER_DETAIL_FAIL";
export const GET_USER_DETAIL_SUCCESS = "GET_USER_DETAIL_SUCCESS";
export const GET_USER_DETAIL_RESET = "GET_USER_DETAIL_RESET";

export const getUserDetail = (params) => {
  return { type: GET_USER_DETAIL, params };
};
export const getUserDetailFail = (response) => {
  return { type: GET_USER_DETAIL_FAIL, response };
};
export const getUserDetailSuccess = (response) => {
  return { type: GET_USER_DETAIL_SUCCESS, response };
};
export const getUserDetailReset = () => {
  return { type: GET_USER_DETAIL_RESET };
};
