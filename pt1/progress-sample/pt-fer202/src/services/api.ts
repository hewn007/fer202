// filepath: pt-fer202/src/services/api.ts

import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Adjust the URL as needed

export const fetchPayments = async () => {
    const response = await axios.get(`${API_URL}/payments`);
    return response.data;
};

export const createPayment = async (paymentData) => {
    const response = await axios.post(`${API_URL}/payments`, paymentData);
    return response.data;
};

export const updatePayment = async (id, paymentData) => {
    const response = await axios.put(`${API_URL}/payments/${id}`, paymentData);
    return response.data;
};

export const deletePayment = async (id) => {
    await axios.delete(`${API_URL}/payments/${id}`);
};