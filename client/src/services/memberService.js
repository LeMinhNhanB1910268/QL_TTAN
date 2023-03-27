import axios from 'axios'
// import './axiosjs'
import createApiClient from "./apiService";
const api = createApiClient('localhost:8000');
const getAllMember = async() => {
    return (await api.get('http://localhost:8000/api/member'))
}
const createMemberService = async(data) => {
    console.log('data1:', data)
    return (await api.post('http://localhost:8000/api/member',data))
}

const deleteMemberService = async(member_id) => {
    console.log('id', member_id)
    return (await api.delete('http://localhost:8000/api/member/'+member_id))
}

const updateMemberService = async(member_id, data) => {
    console.log('id', member_id)
    console.log('date', data)
    return (await api.put('http://localhost:8000/api/member/'+member_id,data)
    );
}

export {
    getAllMember,
    createMemberService,
    deleteMemberService,
    updateMemberService
}