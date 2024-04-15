import axios from "axios";
import {} from "react-router-dom";

const loginAction = async (baseUrl, formData) => {
  try {
    const successData = (await axios.post(`${baseUrl}/login`, formData)).data;
    return { successData };
  } catch (error) {
    const errorData = error.response.data;
    return { errorData };
  }
};

export default loginAction;
