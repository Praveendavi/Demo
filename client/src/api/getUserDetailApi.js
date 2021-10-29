import axios from "axios";

const getUserDetailApi = async (params) => {
  const response = await axios({
    url: "http://localhost:9000/user/view",
    method: "post",
    data: params,
  });
  return response;
};

export default getUserDetailApi;
