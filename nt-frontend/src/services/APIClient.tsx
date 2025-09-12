import axios from 'axios';
import { Base64 } from 'js-base64';


const token = Base64.encode('root:password');

const ApiClient = axios.create({
    baseURL: 'https://localhost:8443/api',
    withCredentials: true,
    auth: {
        username: 'root',
        password: 'password'
    },
    timeout: 7000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${token}`,
    },
    
});

export default ApiClient
