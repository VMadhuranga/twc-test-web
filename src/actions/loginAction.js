import axios from "axios";

const loginAction = async (baseUrl, formData) => {
  try {
    const successData = (
      await axios.post(`${baseUrl}/login`, formData, {
        withCredentials: true,
      })
    ).data;
    return { successData };
  } catch (error) {
    const errorData = error.response.data;
    return { errorData };
  }
};

export default loginAction;
