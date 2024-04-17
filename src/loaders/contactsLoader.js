import axios from "axios";

const contactsLoader = async (baseUrl, userId) => {
  try {
    const { data: successData } = await axios.get(
      `${baseUrl}/users/${userId}/contacts`,
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

export default contactsLoader;
