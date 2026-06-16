import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/period';

export const periodService = {

    getUserProfile: async () => {
        const response = await axios.get(`${API_BASE_URL}/profile`);
        return response.data;
    },

    saveDailyLog: async (userId, logData) => {
        const response = await axios.post(`${API_BASE_URL}/log?userId=${userId}`, logData);
        return response.data;
    },

    getUserLogs: async (userId) => {
        const response = await axios.get(`${API_BASE_URL}/logs?userId=${userId}`);
        return response.data;
    },

    getPredictions: async (userId) => {
        const response = await axios.get(`${API_BASE_URL}/prediction?userId=${userId}`);
        return response.data;
    }
}