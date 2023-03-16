import axios from 'axios'
import './axiosjs'
const getAllCourse = () => {
    return axios.get('http://localhost:8000/api/course');
}
const getCourse = (course_id) => {
    return axios.get('http://localhost:8000/api/course'+course_id);
}
const createCourseService = (data) => {
    console.log('data1:', data)
    return axios.post('http://localhost:8000/api/course',data);

}

const deleteCourseService = (course_id) => {
    console.log('id', course_id)
    return axios.delete('http://localhost:8000/api/course/'+course_id);
}

const updateCourseService = (course_id, data) => {
    console.log('id', course_id)
    console.log('date', data)
    return axios.put('http://localhost:8000/api/course/'+course_id,data
    );
}

export {
    getAllCourse,
    getCourse,
    createCourseService,
    deleteCourseService,
    updateCourseService
}