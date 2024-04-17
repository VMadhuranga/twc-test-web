import axios from "axios";

const contactLoader = async (baseUrl, userId, contactId) => {
  try {
    const { data: successData } = await axios.get(
      `${baseUrl}/users/${userId}/contacts/${contactId}`,
      {
        withCredentials: true,
      },
    );

    return { successData };
  } catch (error) {
    const errorData = error.response;
    return { errorData };
  }
};

export default contactLoader;
