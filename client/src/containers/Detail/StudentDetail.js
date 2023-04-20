import React, { useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {getStudent} from '../../services/studentService'
import {getCourse, getNhom, getNHom} from '../../services/nhomService'

import './StudentDetail.scss'
function StudentDetail (){
    const { id } = useParams();
    const [student] = useState(JSON.parse(localStorage.getItem('student')))
    const [arrStudent,setArrStudent] = useState('')
    const [CourseName,setCourseName] = useState('')
    const [Nhom,setNhom] = useState('')
    useEffect(()=>{
        getPointOfStudent();
        getCourseofNhom();
        InfoNhom();
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
    const InfoNhom = async () => {
        let response =await getNhom(student.nhom_id)
        if(response){
            setNhom(response.data);
            console.log('nhom',Nhom);
        }
    }
    console.log(CourseName);
    return (
        <div className="container">
            <div className="space"></div>
            <div className="info">
                <div className="title-Student">
                    <h2>Thông tin chi tiết</h2>
                </div>
                <div className="row">
                    <div className="info-Student col-6 mt-3">
                    <h3>Thông tin học viên</h3>
                        <p><label>Họ và tên:  </label>{student.name}</p>
                        <p><label>Địa chỉ: </label>{student.name}</p>                   
                        <p><label>Giới tinh:</label>{student.sex}</p>                       
                        <p><label>Số điện thoại:</label>{student.phone}</p>                   
                        <p><label>Email:</label>{student.email}</p>        
                        <p><label>Khóa học:  </label>{CourseName}</p>                      
                        <p><label>Thuộc nhóm:</label>{student.nhom_id}</p>
                    <h3> Bảng điểm: </h3>
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
                <div className="info-class col-6 mt-3">
                    <h3>Thông tin nhóm</h3>  
                    <p><label>Mã nhóm:</label>{Nhom.nhom_id}</p>
                    <p><label>Tên nhóm:</label>{Nhom.name}</p>
                    <p><label>Ngày học:</label>{Nhom.day}</p>
                    <p><label>Thời gian học:</label>{Nhom.time}</p>
                    <p><label>Thông tin thêm:</label>{Nhom.description}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
export default StudentDetail;

