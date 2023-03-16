import axios from 'axios'
import './axiosjs'
const handleLoginApi = (username, password) => {
    return axios.post('http://localhost:8000/api/auth/login', {username, password});
}
const getAllAccount = () => {
    return axios.get('http://localhost:8000/api/account');
}
const createAccountService = (data,token) => {
    console.log('data1:', data)
    return axios.post('http://localhost:8000/api/account',data,{headers:{
        Authorization: `Bearer ${token}`
    }});

}

const deleteAccountService = (account_id) => {
    console.log('id', account_id)
    return axios.delete('http://localhost:8000/api/account/'+account_id);
}

const updateAccountService = (account_id, data) => {
    console.log('id', account_id)
    console.log('date', data)
    return axios.put('http://localhost:8000/api/account/'+account_id,data
    );
}
export {
    handleLoginApi,
    getAllAccount,
    createAccountService,
    deleteAccountService,
    updateAccountService
}