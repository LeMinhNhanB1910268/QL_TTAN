
import createApiClient from "./apiService";
const api = createApiClient('http://localhost:8000');

const getAllPoint = async () => {
    return (await api.get(`api/point`)).data;
}
const getPoint = async (point_id) => {
    return (await api.get(`api/point/`+point_id));
}

const createPointService = async (data) => {
    console.log("dât2",data)
    return (await api.post(`api/point`,data));
}

const deletePointService = async (point_id) => {
    return (await api.delete(`api/point/`+point_id));
}

const updatePointService = async (point_id, data) => {
    return (await api.put(`api/point/`+point_id,data))
    ;
}

export {
    getAllPoint,
    getPoint,
    createPointService,
    deletePointService,
    updatePointService
}