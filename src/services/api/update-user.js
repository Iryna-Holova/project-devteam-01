import axios from "axios";

export const updateProfile = async ({ data }) => {
//   axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data: responseData } = await axios.patch(
      '/api/users/update',
      data
    );

    if (status === 200) {
      return responseData;
    } else {
      return null;
    }
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};