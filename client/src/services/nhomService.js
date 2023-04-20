
import createApiClient from "./apiService";
const api = createApiClient('http://localhost:8000');
const getAllNhom = async() => {
    return (await api.get('api/nhom')).data
}

const getNhom = async(nhom_id) => {
    return (await api.get('api/nhom/'+nhom_id)).data
}
const createNhomService = async(data) => {
    console.log('data1:', data)
    return (await api.post('api/nhom',data))

}

const getCourse = async (course_id) => {
    return (await api.get('api/ClassWithCourse/'+course_id)).data
}
const getClassofMember = async (member_id) => {
    return (await api.get('api/getClassOfMenber/'+member_id)).data
}
const deleteNhomService = async(nhom_id) => {
    console.log('id', nhom_id)
    return (await api.delete('api/nhom/'+nhom_id))
}

const updateNhomService = async(nhom_id, data) => {
    console.log('id', nhom_id)
    console.log('date', data)
    return (await api.put('api/nhom/'+nhom_id,data)
    );
}

export {
    getAllNhom,
    getNhom,
    getCourse,
    getClassofMember,
    createNhomService,
    deleteNhomService,
    updateNhomService
}