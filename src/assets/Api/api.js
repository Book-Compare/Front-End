// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

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

export const registerApi = async (formData) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      username: formData.username,
      password: formData.password,
      password2: formData.password2,
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name
    }, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      console.error('Registration failed. Please try again later.');
      throw new Error('Registration failed. Please try again later.');
    }
  }
};