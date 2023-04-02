import React, { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {getStudent} from '../../services/studentService'
import {getCourse} from '../../services/nhomService'

import './StudentDetail.scss'
function StudentDetail (){
    const { id } = useParams();
    const [student] = useState(JSON.parse(localStorage.getItem('student')))
    const [arrStudent,setArrStudent] = useState('')
    const [CourseName,setCourseName] = useState('')
    useEffect(()=>{
        getPointOfStudent();
        getCourseofNhom();
    },[])
    const getPointOfStudent = async () => {
        let response = await getStudent(id);
        if(response){
            setArrStudent(response.data)
            console.log('hihi',response.data);
        }
    }
    const getCourseofNhom = async () => {
        let response = await getCourse(student.nhom_id);
        if(response){
            setCourseName(response.data.get_course.name)
            console.log('huhuuu', response.data.get_course.name);
        }
    }
    console.log(CourseName);
    return (
        <div className="container">
            <div className="title-Student">
                <h1>Thông tin học viên</h1>
            </div>
            <div className="content-Student">
                <div>
                    <label>
                        <h3>Họ và tên: </h3>
                    </label>
                    <p>{student.name}</p>
                </div>
                <div>
                    <label>
                        <h3>Địa chỉ: </h3>
                    </label>
                    <p>{student.name}</p>
                </div>
                <div>
                    <label>
                        <h3>Giới tinh: </h3>
                    </label>
                    <p>{student.sex}</p>
                </div>
                <div>
                    <label>
                        <h3>Số điện thoại: </h3>
                    </label>
                    <p>{student.phone}</p>
                </div>
                <div>
                    <label>
                        <h3>Email: </h3>
                    </label>
                    <p>{student.email}</p>
                </div>
                <div>
                    <label>
                        <h3>Khóa học: </h3>
                    </label>
                    <p>{CourseName}</p>
                </div>
                <div>
                    <label>
                        <h3>Thuộc nhóm: </h3>
                    </label>
                    <p>{student.nhom_id}</p>
                </div>
                <h3>Bảng điểm:</h3>
                <table>
                    <tbody>
                        {
                            arrStudent.points && arrStudent.points.map((item, index)=>{
                                return (
                                    <tr key={index}>
                                        Kiểm tra lần {index+1}: {item.diem}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default StudentDetail;

