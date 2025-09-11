import axios from 'axios';


export const apiClient = axios.create({
    url: 'https://localhost:8443/api/',
    withCredentials: true,
    timeout: 7000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'BASE64 user:password'
    }
    
});