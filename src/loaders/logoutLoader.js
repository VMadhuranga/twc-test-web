import axios from "axios";

const logoutLoader = async (baseUrl) => {
  try {
    await axios.get(`${baseUrl}/logout`, {
      withCredentials: true,
    });
  } catch (error) {
    const errorData = error.response.data;
    console.error(errorData);
  }
};

export default logoutLoader;
