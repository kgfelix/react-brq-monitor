import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fake-monitor-bugs.herokuapp.com'
})

export default api;