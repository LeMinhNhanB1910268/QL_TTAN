import axios from "axios";
const token = localStorage.getItem('token');
// console.log(token);
const instance = axios.create({
    baseURL: process.env.DATABASE_PORT=8000,
    headers: {Authorization: `Bearer ${token}`},

})
export {instance}
