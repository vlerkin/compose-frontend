import axios from "axios";

axios.defaults.headers.post['Origin'] = 'http://localhost:3000';

export const apiClient = axios.create({
    baseURL: "http://localhost:5555",
});