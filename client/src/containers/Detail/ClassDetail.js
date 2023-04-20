import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import './ClassDetail.scss'
import {getNhom,  getCourse} from '../../services/nhomService'

import {getTeacher} from '../../services/accountService'

function ClassDetail () {
    const { id } = useParams();
    const [Nhom,setNhom] = useState('')
    const [Count,setCount] = useState('')
    const [Course,setCourse] = useState('')
    const [Teacher,setTeacher] = useState('')

    useEffect(()=>{
        getNhomWithStudent();
    },[])
    useEffect(()=>{
        if(Nhom){
            CountStudent();
            getCourseWithClass();
            getTeacherOfClass();
        }
    },[Nhom])
    const getNhomWithStudent = async () => {
        let response = await getNhom(id);
        console.log(response)
        if(response){
            setNhom(response.data)
            console.log('nhom',Nhom)
            // console.log(Nhom.member_id)
        }
    }
    const getTeacherOfClass = async () => {
        console.log(Nhom.member_id)
        let response = await getTeacher(Nhom.member_id)
        if (response){
            setTeacher(response.data)
            console.log('teacher',Teacher)
        }
    }
    const getCourseWithClass = async () => {
        let response = await getCourse(Nhom.course_id);
        console.log(response)
        if(response){
            setCourse(response.data.get_course)

        }
    }
    const CountStudent = () => {
        let count = Nhom.get_student.length;
        setCount(count);

    }

    return (
        <div className="content-deatil-class">
            <div className="info">
                <h2>Thông tin chi tiết về {Nhom.name}</h2>
                <div className="row">
                    <div className="info-class col-6">
                        <h3>Thông tin nhóm</h3>
                        <p><label>Mã nhóm:</label>{Nhom.nhom_id}</p>
                        <p><label>Tên nhóm:</label>{Nhom.name}</p>
                        <p><label>Tên nhóm:</label>{Nhom.name}</p>
                        <p><label>Ngày học:</label>{Nhom.day}</p>
                        <p><label>Số lượng học viên:</label>{Count}</p>
                        <p><label>Giới thiệu về lớp:</label>{Nhom.description}</p>
                    </div>
                    <div className="info-course col-6">
                        <h3>Thông tin khóa học</h3>
                        <p><label>Mã khóa học:</label>{Course.course_id}</p>
                        <p><label>Tên khóa học:</label>{Course.name}</p>
                        <p><label>Thời gian bắt đầu:</label>{Course.time_start}</p>
                        <p><label>Thời gian kết thúc:</label>{Course.time_finish}</p>
                        <p><label>Học phí:</label>{Course.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassDetail;