import axios from "axios";

const editContactAction = async (baseUrl, userId, contactId, formData) => {
  try {
    await axios.put(
      `${baseUrl}/users/${userId}/contacts/${contactId}`,
      formData,
      {
        withCredentials: true,
      },
    );
  } catch (error) {
    const errorData = error.response.data;
    return errorData;
  }
};

export default editContactAction;
