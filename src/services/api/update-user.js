import axios from 'axios';

export const updateProfile = async ({ data }) => {
  const response = await axios.patch('/api/users/update', data);

  return response;
};
