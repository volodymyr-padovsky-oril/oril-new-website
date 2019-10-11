import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
});

export default apiClient;