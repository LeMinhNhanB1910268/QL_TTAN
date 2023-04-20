import React, {useEffect, useState} from "react";

import './StatisticalReview.scss'
import { getAllCourse, getClass } from "../../../services/courseService";
import {getReview, getCountReview, getCountReviewD, getCountReviewCD,} from '../../../services/studentService'
import ReviewCD from "./ReviewCD";
import ReviewD from "./ReviewD";
export default function StatisticalReview() {
  const [nhomID,setnhomID] = useState('')
  const [CourseID,setCourseID] = useState('')
  const [Course,setCourse] = useState('')
  const [arrCourse,setArrCourse] = useState('')
  const [isOpenReViewD,setisOpenReViewD] = useState(false)
  const [isOpenReViewCD, setisOpenReViewCD] = useState(false)
  const [CountReviewD,setCountReviewD] = useState('')
  const [CountReviewCD,seCountReviewCD] = useState('')
  const [Count,setCount] = useState('')
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
          getCountReviewDat();
          getCountChuaDat();
          getCount();
      }
  },[nhomID])
  const getCount = async () => {
    let response = await getCountReview(nhomID) 
    if(response){
      setCount(response)
    }
  }

  const getCountReviewDat = async () => {
      let response = await getCountReviewD(nhomID) 
      if(response){
        setCountReviewD(response)
      }
  }
  const getCountChuaDat = async () => {
      let response = await getCountReviewCD(nhomID) 
      if(response){
        seCountReviewCD(response)
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
  const handleViewD = () => {
    setisOpenReViewD(true)
  }
  const handleViewCD = () => {
    setisOpenReViewCD(true)
  }
  return (
    <div className='content-statistical-review'>
      <div className="body-statistical">
        <h2 className="title">Thống kê</h2>
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
      </div>
      <div className="table">
        <table id="customers">
            <tbody>
                <tr>
                    <th>Mã nhóm</th>
                    <th>Sỉ số</th>
                    <th>Số lượng HV đạt chuẩn</th>
                    <th>Số lượng HV chưa đạt</th>
                    <th>Danh sách HV đạt chuẩn</th>
                    <th>Danh sách HV chưa đạt</th>
                </tr>
                <tr>
                    <td>{nhomID}</td>
                    <td>{Count}</td>
                    <td>{CountReviewD}/{Count}</td> 
                    <td>{CountReviewCD}/{Count}</td>
                    <td><p onClick={()=>{handleViewD()}}>Xem danh sách</p></td>
                    <td><p onClick={()=>{handleViewCD()}}>Xem danh sách</p></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div onClick={()=>{setisOpenReViewD(false)}}>
        {isOpenReViewD ? (<ReviewD nhomid={nhomID}/>): (<></>)}
      </div>
      <div onClick={()=>{setisOpenReViewCD(false)}}> 
        {isOpenReViewCD ? (<ReviewCD nhomid={nhomID} />): (<></>)}
      </div>
    </div>
  )
}
