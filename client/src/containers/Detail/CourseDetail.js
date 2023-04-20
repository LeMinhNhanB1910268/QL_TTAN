import React, { useEffect,useState} from "react";

import './CourseDetail.scss'

import {getClass} from '../../services/courseService'
function CourseDetail (){
    const [course] = useState(JSON.parse(localStorage.getItem('course')))
    const [Count,setCount] = useState('')
    useEffect(()=>{
        if(course){
            getClassOfCourse();
        }
    },[course])
    const getClassOfCourse = async () => {
        let response = await getClass(course.course_id);
        if (response){
            setCount(response.data.data.get_class.length);
        }
    }
    return (
        <div className="container">
            <div className="content-course-detail">
                <div className="title-Course">
                    <h2>Thông tin chi tiết</h2>
                </div>
                <div className="content-Course mt-3">
                        <h3>Thông tin khóa học</h3>
                        <p><label>Tên khóa học:</label>{course.name}</p>
                        <p><label>Thời gian bắt đầu:</label>{course.time_start}</p>
                        <p><label>Thời gian kết thúc:</label>{course.time_finish}</p>
                        <p><label>Giá:</label>{course.price}</p>
                        <p><label>Số lượng nhóm:</label>{Count}</p>
                    
                </div>
            </div>
        </div>
    )
}
export default CourseDetail;

