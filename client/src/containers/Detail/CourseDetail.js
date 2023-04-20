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
            setCourse(response.data)
            setCount(response.data.data.get_class.length);
            // console.log('course',response.data.data)
            // console.log('course1',response.data.data.get_class.length)
        }
    }
    return (
        <div className="container">
            <div className="content-course-detail">
                <div className="title-Course">
                    <h2>Thông tin khóa học</h2>
                </div>
                <div className="content-Course">
                    <div>
                        <label>
                            <h3>Tên khóa học: </h3>
                        </label>
                        <p>{course.name}</p>
                    </div>
                    <div>
                        <label>
                            <h3>Thời gian bắt đầu: </h3>
                        </label>
                        <p>{course.time_start}</p>
                    </div>
                    <div>
                        <label>
                            <h3>Thời gian kết thúc: </h3>
                        </label>
                        <p>{course.time_finish}</p>
                    </div>
                    <div>
                        <label>
                            <h3>Giá: </h3>
                        </label>
                        <p>{course.price}</p>
                    </div>
                    <div>
                        <label>
                            <h3>Số lượng nhóm: </h3>
                        </label>
                        <p>{Count}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseDetail;

