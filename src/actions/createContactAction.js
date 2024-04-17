import axios from "axios";

const createContactAction = async (baseUrl, userId, formData) => {
  try {
    await axios.post(`${baseUrl}/users/${userId}/contacts`, formData, {
      withCredentials: true,
    });
  } catch (error) {
    const errorData = error.response.data;
    return errorData;
  }
};

export default createContactAction;
