import axios from 'axios'
import './axiosjs'
const getAllStudent = () => {
    return axios.get('http://localhost:8000/api/student');
}
const createStudentService = (data) => {
    console.log('data1:', data)
    return axios.post('http://localhost:8000/api/student',data);

}

const deleteStudentService = (student_id) => {
    console.log('id', student_id)
    return axios.delete('http://localhost:8000/api/student/'+ student_id);
}

const updateStudentService = (student_id, data) => {
    console.log('id', student_id)
    console.log('date', data)
    return axios.put('http://localhost:8000/api/student/'+ student_id,data
    );
}

export {
    getAllStudent,
    createStudentService,
    deleteStudentService,
    updateStudentService
}