import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import './reviewManager.scss'
import { getAllCourse, getClass } from "../../services/courseService";
import ModalAddReview from '../../components/Modal/Review/ModalAddReview'
import ModalEditReview from '../../components/Modal/Review/ModalEditReview'
import { getReview } from "../../services/studentService";
import {createReviewService, deleteReviewService, updateReviewService} from '../../services/reviewService'

function ReviewStudent () {
    const navigate = useNavigate();
    const [arrNhom,setArrNhom] = useState('')
    const [arrCourse,setArrCourse] = useState('')
    const [nhomID,setnhomID] = useState('')
    const [CourseID,setCourseID] = useState('')
    const [Course,setCourse] = useState('')
    const [isOpenAddReview,setisOpenAddReview] = useState(false)
    const [isOpenEditReview,setisOpenEditReview] = useState(false)
    const [studentReview,setStudentReview] = useState({})
    useEffect(()=>{
        getAllCourses();
    },[])
    useEffect(()=>{
        if(CourseID){
            OneCourse();
        }
    },[CourseID])
    useEffect(()=>{
        if(nhomID){
            getReviewWithStudent();
        }
    },[nhomID])
    const getReviewWithStudent = async () => {
        let response = await getReview(nhomID);
        if(response){
            setArrNhom(response.data)
            console.log('data',response.data)
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
    const handleAddReview = (student) => {
        setisOpenAddReview(true)
        console.log(student)
        setStudentReview({studentReview: student})
    }
    const createReview = async (review) =>{
        await createReviewService(review)
        getReviewWithStudent();
    }
    const handleEidtReview = (student) => {
        setisOpenEditReview(true)
        setStudentReview({studentReview: student})
    }
    const doEditReview = async (review) => {
        try{
            let response = await updateReviewService(review.review_id,review);
            if (response){
                setisOpenEditReview(false)
                getReviewWithStudent();
            }
        }catch(e){
            console.log(e)
        }
    }
    const handleDeleteReview = async (rv) => {
        try{
            await deleteReviewService(rv.review_id)
        }catch(e){
            console.log(e)
        }
        getReviewWithStudent();
    }
    const handleDetail = (student) => {
        localStorage.setItem('student', JSON.stringify(student));
        navigate({pathname: '/student-detail/'+student.student_id})
    }
    const Reviewmenu=({rv})=>{
        const [showmenu,setShowMenu] = useState(false);
        const handleMenu =()=>{
            setShowMenu(!showmenu)
        }
        return(
            <> 
                <div style={{display:"flex", flexDirection:'row'}} 
                    onClick={()=>handleMenu()}><p>{rv.name}:{rv.detail}</p> 
                    {showmenu && 
                    <div className="modal-review">
                        <button className="btn-edit-review" onClick={()=>{handleEidtReview(rv)}}>Chỉnh sửa</button>
                        <button className="btn-delete-review" onClick={()=>{handleDeleteReview(rv)}}>Xóa</button>
                    </div>}
                </div>
               
            </>
        )
    }
    return (
        <div className="content-review">

            <ModalAddReview 
                setIsOpen={()=>{setisOpenAddReview(false)}} 
                isOpen={isOpenAddReview}
                currentStudent={studentReview}
                createReview = {createReview}
            />
            {
                isOpenEditReview && 
                <ModalEditReview
                setIsOpen={()=>{setisOpenEditReview(false)}} 
                isOpen={isOpenEditReview}
                currentReview={studentReview}
                editReview = {doEditReview}
                />
            }
            <h2 className="title">Quản lý đánh giá</h2>
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
            <div className="content-review-bot">
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Mã học viên</th>
                            <th>Họ và tên</th>
                            <th>Giới tính</th>
                            <th>Điểm</th>
                            <th>Đánh giá</th>
                            <th>Thao tác</th>
                        </tr>
                        {arrNhom && arrNhom.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.student_id}</td>
                                    <td onClick={()=>{handleDetail(item)}}>{item.name}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.points.map((point,index)=>{
                                        return(
                                            <div><p key={index}>{point.name}: {point.diem}</p></div>
                                        )
                                    })}</td>
                                    <td>{item.review.map((rv,index)=><Reviewmenu key={index} rv={rv} ></Reviewmenu>)}
                                    </td>
                                    <td>
                                        <button className="btn-add-review" onClick={()=>{handleAddReview(item)}}>Thêm dánh giá</button>
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
export default ReviewStudent;