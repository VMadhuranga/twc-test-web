import axios from "axios";

const registerAction = async (baseUrl, formData) => {
  try {
    await axios.post(`${baseUrl}/users`, formData);
  } catch (error) {
    const errorData = error.response.data;
    return errorData;
  }
};

export default registerAction;
