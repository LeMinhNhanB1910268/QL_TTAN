import React, {useEffect, useState} from "react";


import './StatisticalFee.scss'
import FeeCD from "./FeeCD";
import FeeDD from "./FeeDD";
import { getAllCourse, getClass } from "../../../services/courseService";
import {getCountStateFeeB, getCountStateFeeA,getCountStateFee} from '../../../services/studentService'
export default function StatisticalFee() {
    const [nhomID,setnhomID] = useState('')
    const [CourseID,setCourseID] = useState('')
    const [Course,setCourse] = useState('')
    // const [arrNhom,setArrNhom] = useState('')
    const [arrCourse,setArrCourse] = useState('')
    const [arrCountDD,setArrCountDD] = useState('')
    const [arrCountCD,setArrCountCD] = useState('')
    const [arrCount,setArrCount] = useState('')
    const [isOpenViewDD,setisOpenViewDD] = useState(false)
    const [isOpenViewCD, setisOpenViewCD] = useState(false)
  
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
            getCountDaDong();
            getCountChuaDong();
            getCount();
        }
    },[nhomID])


    const getCount = async () => {
        let response = await getCountStateFee(nhomID) 
        if(response){
            setArrCount(response)
        }
    }

    const getCountDaDong = async () => {
        let response = await getCountStateFeeA(nhomID) 
        if(response){
            setArrCountDD(response)
        }
    }
    const getCountChuaDong = async () => {
        let response = await getCountStateFeeB(nhomID) 
        if(response){
            setArrCountCD(response)
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
    const handleViewDD = () => {
        setisOpenViewDD(true)
    }
    const handleViewCD = () => {
        setisOpenViewCD(true)
    }
  return (
    <div className='content-statistical-fee'>
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
                    <th>Số lượng HV đã đóng</th>
                    <th>Số lượng HV chưa đóng</th>
                    <th>Danh sách HV đã đóng</th>
                    <th>Danh sách HV chưa đóng</th>
                </tr>
                <tr>
                    <td>{nhomID}</td>
                    <td>{arrCountDD>0 ? (arrCountDD) : 0}/{arrCount}</td> 
                    <td>{arrCountCD>0 ? (arrCountCD) : 0}/{arrCount}</td>
                    <td><p onClick={()=>{handleViewDD()}}>Xem danh sách</p></td>
                    <td><p onClick={()=>{handleViewCD()}}>Xem danh sách</p></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div onClick={()=>{setisOpenViewDD(false)}}>
        {isOpenViewDD ? (<FeeDD nhomid={nhomID}/>): (<></>)}
      </div>
      <div onClick={()=>{setisOpenViewCD(false)}}> 
        {isOpenViewCD ? (<FeeCD nhomid={nhomID} />): (<></>)}
      </div>
    </div>
  )
}
