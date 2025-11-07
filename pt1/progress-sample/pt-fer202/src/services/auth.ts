// filepath: pt-fer202/src/services/auth.ts

import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; // Adjust the URL as needed

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export const logout = async () => {
    // Logic for logging out the user
    // This could involve clearing tokens or user data
};

export const register = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
};