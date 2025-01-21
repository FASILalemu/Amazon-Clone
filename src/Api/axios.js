import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'https://amazon-api-deploy-srpk.onrender.com'
});
export {axiosInstance}