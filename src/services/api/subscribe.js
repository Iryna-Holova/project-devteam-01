import axios from 'axios';

export const subscribe = async email => {
  try {
    const response = await axios.post(`/api/users/subscription`, email);
    return response;
  } catch (error) {
    return error.response;
  }
};
