import axios from 'axios'
import createApiClient from "./apiService";
const api = createApiClient('http://localhost:8000');

const getAllTuition = async () => {
    return (await api.get(`api/tuitionfee`)).data;
}
const getTuition = async (tuitionfee_id) => {
    return (await api.get(`api/tuitionfee/`+tuitionfee_id));
}
const getClass = async (tuitionfee_id) => {
    return (await api.get(`api/getClass/`+tuitionfee_id));
}
const createTuitionService = async (data) => {
    console.log("dât2",data)
    return (await api.post(`api/tuitionfee`,data));
}

const deleteTuitionService = async (tuitionfee_id) => {
    return (await api.delete(`api/tuitionfee/`+tuitionfee_id));
}

const updateTuitionService = async (tuitionfee_id, data) => {
    return (await api.put(`api/tuitionfee/`+tuitionfee_id,data))
    ;
}

export {
    getAllTuition,
    getTuition,
    getClass,
    createTuitionService,
    deleteTuitionService,
    updateTuitionService
}