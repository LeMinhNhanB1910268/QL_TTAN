import createApiClient from "./apiService";
const api = createApiClient('http://localhost:8000');

const getAllStudent = async() => {
    return (await api.get('api/student')).data
}

const getStudent = async(student_id) => {
    return (await api.get('api/student/'+student_id)).data
}
const getFee = async(nhom_id) => {
    return (await api.get('api/getTuition/'+nhom_id)).data
}
const getReview = async(nhom_id) => {
    return (await api.get('api/getReview/'+nhom_id)).data
}
const getPoint = async(nhom_id) => {
    return (await api.get('api/getPoint/'+nhom_id)).data
}

const createStudentService = async(data) => {
    console.log('data1:', data)
    return (await api.post('api/student',data))
}
const deleteStudentService = async(student_id) => {
    console.log('id', student_id)
    return (await api.delete('api/student/'+ student_id))
}

const updateStudentService = async(student_id, data) => {
    console.log('id', student_id)
    console.log('date', data)
    return (await api.put('api/student/'+ student_id,data)
    );
}

export {
    getAllStudent,
    getStudent,
    getFee,
    getPoint,
    getReview,
    createStudentService,
    deleteStudentService,
    updateStudentService
}