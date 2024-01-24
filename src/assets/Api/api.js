// api.js

import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/';

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });

    // Handle other response checks based on your API structure
    if (response.status === 200 && response.data && response.data.token) {
      return response.data;
    } else {
      throw new Error('Invalid response from the server');
    }
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
};
