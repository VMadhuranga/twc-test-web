import axios from "axios";

const deleteContactAction = async (baseUrl, userId, contactId) => {
  try {
    await axios.delete(`${baseUrl}/users/${userId}/contacts/${contactId}`, {
      withCredentials: true,
    });
  } catch (error) {
    const errorData = error.response.data;
    console.log(errorData);
  }
};

export default deleteContactAction;
