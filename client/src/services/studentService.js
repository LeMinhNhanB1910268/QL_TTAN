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
const getStateFeeA = async(nhom_id) => {
    return (await api.get('api/getStateFeeA/'+nhom_id)).data
}
const getCountStateFeeA = async(nhom_id) => {
    return (await api.get('api/getCountStateFeeA/'+nhom_id)).data
}
const getStateFeeB = async(nhom_id) => {
    return (await api.get('api/getStateFeeB/'+nhom_id)).data
}
const getCountStateFeeB = async(nhom_id) => {
    return (await api.get('api/getCountStateFeeB/'+nhom_id)).data
}
const getCountStateFee = async(nhom_id) => {
    return (await api.get('api/getCountStateFee/'+nhom_id)).data
}
const getCountReview = async(nhom_id) => {
    return (await api.get('api/getCountReview/'+nhom_id)).data
}
const getCountReviewD = async(nhom_id) => {
    return (await api.get('api/getCountReviewD/'+nhom_id)).data
}
const getCountReviewCD = async(nhom_id) => {
    return (await api.get('api/getCountReviewCD/'+nhom_id)).data
}
const getReviewD = async(nhom_id) => {
    return (await api.get('api/getReviewD/'+nhom_id)).data
}
const getReviewCD = async(nhom_id) => {
    return (await api.get('api/getReviewCD/'+nhom_id)).data
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
    getStateFeeA,
    getStateFeeB,
    getCountStateFee,
    getCountStateFeeB,
    getCountStateFeeA,
    getCountReview,
    getCountReviewD,
    getCountReviewCD,
    getReviewD,
    getReviewCD,
    createStudentService,
    deleteStudentService,
    updateStudentService
}