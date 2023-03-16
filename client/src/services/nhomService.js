import axios from 'axios'
import './axiosjs'
const getAllNhom = () => {
    return axios.get('http://localhost:8000/api/nhom');
}
const createNhomService = (data) => {
    console.log('data1:', data)
    return axios.post('http://localhost:8000/api/nhom',data);

}

const deleteNhomService = (nhom_id) => {
    console.log('id', nhom_id)
    return axios.delete('http://localhost:8000/api/nhom/'+nhom_id);
}

const updateNhomService = (nhom_id, data) => {
    console.log('id', nhom_id)
    console.log('date', data)
    return axios.put('http://localhost:8000/api/nhom/'+nhom_id,data
    );
}

export {
    getAllNhom,
    createNhomService,
    deleteNhomService,
    updateNhomService
}