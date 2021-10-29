import axios from "axios";

const getUserListApi = async (params) => {
  const response = await axios({
    url: "http://localhost:9000/user/list",
    method: "get",
    params: params,
  });
  return response;
};

export default getUserListApi;
