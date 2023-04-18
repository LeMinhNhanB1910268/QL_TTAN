import React, {useEffect, useState} from "react";

import './tuitionfeeManager.scss'
import { getNhom } from "../../services/nhomService";
import { getAllCourse, getCourse,getClass } from "../../services/courseService";
import { getFee } from "../../services/studentService";
import {updateTuitionService, createTuitionService} from "../../services/tuiionfeeService";
function tuitionManager() {

    // const [arrNhom,setArrNhom] = useState('')
    const [arrCourse,setArrCourse] = useState('')
    const [nhomID,setnhomID] = useState('')
    const [CourseID,setCourseID] = useState('')
    const [Course,setCourse] = useState('')
    const [isOpenAddReview,setisOpenAddReview] = useState(false)
    const [studentReview,setStudentReview] = useState({})

    const [Student,setStudent] = useState('')

    useEffect(()=>{
        getAllCourses();
        // OneCourse();
    },[])
    useEffect(()=>{
        if(CourseID){
            OneCourse();
        }
    },[CourseID])
    useEffect(()=>{
        if(nhomID){
            getStudent();
        }
    },[nhomID])
    const getStudent = async () => {
        console.log('nhomID', nhomID)
        let response = await getFee(nhomID);
        if(response){
            setStudent(response.data)
            // console.log('studentFee', response.data)
        }
    }
    const  OneCourse = async () => {
        let response = await getClass(CourseID);
        if(response){
            setCourse(response.data.data)
            // console.log('hahah',response.data.data)
        }
    }
    const getAllCourses = async () => {
        let response = await getAllCourse();
        if(response){
            setArrCourse(response.data)

        }
    }
    const handleState = async (student) => {

        let rp = await createTuitionService({
            student_id: student.student_id,
            status: 'da dong'
        })
        getStudent();
    }
    const handlePrint = async (student) => {

    }

    return (
        <div className="content-fee">
            <h2 className="title">Quản lý học phí</h2>
            <div className="row">
                <h3>Xem học viên</h3>
                <div className="col-3"></div>
                <div className="col-3 course">
                    <label>Khóa hoc:</label>
                    <select onClick={(e)=>{setCourseID(e.target.value)}}>
                        {
                            arrCourse && arrCourse.map((item, index) => {
                                return (
                                    <option key={index} value={item.course_id} >{item.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-3 nhom">
                    <label>Nhóm:</label>
                    <select onClick={(e)=>{setnhomID(e.target.value)}}>
                        {
                            Course.get_class  && Course.get_class.map((item, index) => {
                                return (
                                    <option key={index} value={item.nhom_id}>{item.name ? (item.name) : " "}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="content-bot">
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Mã học viên</th>
                            <th>Họ và tên</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>Học phí</th>
                            <th>Trạng thái</th>

                            <th>Thao tác</th>
                        </tr>
                        {Student && Student.map((item, index)=>{
                            // console.log("ahiih",Student)
                            return(
                                <tr key={index}>
                                    <td>{item.student_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.birthday}</td> 
                                    <td>{Course.price}</td>
                                    <td>{item.tuitionfee!==null && item.tuitionfee.status }</ td>

                                    <td>
                                        <button className="btn-confirm" onClick={()=>{handleState(item)}}>Xác nhận</button>
                                        <button className="btn-print" onClick={()=>{handlePrint(item)}}>In HD</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
    
}
export default tuitionManager;