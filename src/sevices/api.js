// src/services/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // Your FastAPI server URL

export const uploadCertificate = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const fetchCertificates = async () => {
    const response = await axios.get(`${API_URL}/certificates`);
    return response.data;
};
