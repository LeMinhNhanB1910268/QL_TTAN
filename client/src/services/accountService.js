import axios from 'axios'
import createApiClient from "./apiService";
const api = createApiClient('http://localhost:8000');

const handleLoginApi = (username, password) => {
    return axios.post('http://localhost:8000/api/auth/login', {username, password});
}
const getUser = async()=>{
    return (await api.get(`api/user`)).data;
}
const getAllAccount = async () => {
    return (await api.get('api/account')).data;
}
const createAccountService = async (data) => {
    console.log('data2:', data)
    return (await api.post('api/account',data)).data;

}
const createAccountNoMemberService = async (data) => {
    console.log('data2:', data)
    return (await api.post('api/account/NoMember/',data)).data;

}
const deleteAccountService = async (account_id) => {
    // console.log('id', account_id)
    return (await api.delete('api/account/'+account_id));
}

const updateAccountService = async (account_id, data) => {
    console.log('id', account_id)
    // console.log('date', data)
    return (await api.put('api/account/'+account_id,data).data
    );
}
export {
    getUser,
    handleLoginApi,
    getAllAccount,
    createAccountService,
    deleteAccountService,
    updateAccountService,
    createAccountNoMemberService
}