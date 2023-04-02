import React, { useEffect,useState} from "react";

import './CourseDetail.scss'
function CourseDetail (){
    const [course] = useState(JSON.parse(localStorage.getItem('course')))
    useEffect(()=>{
    },[])
    return (
        <div className="container">
            <div className="title-Course">
                <h1>Thông tin khóa học</h1>
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
            </div>
        </div>
    )
}
export default CourseDetail;

