import axios from 'axios'
import createApiClient from "./apiService";
const api = createApiClient('http://localhost:8000');

const getAllCourse = async () => {
    return (await api.get(`api/course`)).data;
}
const getCourse = async (course_id) => {
    return (await api.get(`api/course/`+course_id));
}
const createCourseService = async (data) => {
    return (await api.post(`api/course`,data));
}

const deleteCourseService = async (course_id) => {
    // console.log('id', course_id)
    return (await api.delete(`api/course/`+course_id));
}

const updateCourseService = async (course_id, data) => {
    // console.log('id', course_id)
    // console.log('date', data)
    return (await api.put(`api/course/`+course_id,data))
    ;
}

export {
    getAllCourse,
    getCourse,
    createCourseService,
    deleteCourseService,
    updateCourseService
}