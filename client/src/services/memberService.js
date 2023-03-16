import axios from 'axios'
import './axiosjs'
const getAllMember = () => {
    return axios.get('http://localhost:8000/api/member');
}
const createMemberService = (data) => {
    console.log('data1:', data)
    return axios.post('http://localhost:8000/api/member',data);
}

const deleteMemberService = (member_id) => {
    console.log('id', member_id)
    return axios.delete('http://localhost:8000/api/member/'+member_id);
}

const updateMemberService = (member_id, data) => {
    console.log('id', member_id)
    console.log('date', data)
    return axios.put('http://localhost:8000/api/member/'+member_id,data
    );
}

export {
    getAllMember,
    createMemberService,
    deleteMemberService,
    updateMemberService
}