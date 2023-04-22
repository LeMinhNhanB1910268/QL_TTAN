import React, {useEffect, useState} from "react";
import './pointManager.scss'
import { getAllCourse, getCourse,getClass } from "../../services/courseService";
import { getPoint, getFee } from "../../services/studentService";
import {createPointService, updatePointService, deletePointService} from "../../services/pointService";
import ModalAddPoint from "../../components/Modal/Point/ModalAddPoint"
import ModalEditPoint from "../../components/Modal/Point/ModalEditPoint";

function pointManager() {
    const [arrCourse,setArrCourse] = useState('')
    const [nhomID,setnhomID] = useState('')
    const [CourseID,setCourseID] = useState('')
    const [Course,setCourse] = useState('')
    const [isOpenAddPoint,setisOpenAddPoint] = useState(false)
    const [isOpenEditPoint,setisOpenEditPoint] = useState(false)
    const [studentPoint,setStudentPoint] = useState({})
    const [Student,setStudent] = useState('')

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
            getStudent();
        }
    },[nhomID])
    const getStudent = async () => {
        let response = await getPoint(nhomID);
        // console.log("point", response.data)
        if(response){
            setStudent(response.data)
        }
    }
    const  OneCourse = async () => {
        let response = await getClass(CourseID);
        if(response){
            setCourse(response.data.data)
        }
    }
    const getAllCourses = async () => {
        let response = await getAllCourse();
        if(response){
            setArrCourse(response.data)
        }
    }
    const createPoint = async (point) => {
        let rp = await createPointService(point);
        getStudent();
    }
    const handleAddPoint = (student) => {
        setisOpenAddPoint(true)
        setStudentPoint({studentPoint: student})
    }
    const handleEditPoint = (student) => {
        setisOpenEditPoint(true)
        setStudentPoint({studentPoint: student})
    }
    const doEditPoint = async (point) => {
        try{
            let response = await updatePointService(point.point_id, point);
            if(response){
                setisOpenEditPoint(false);
                getStudent();
            }
        }catch(e){
            console.log(e);
        }
    }
    const handleDeletePoint = async (point) => {
        try{
            await deletePointService(point.point_id)
            getStudent();
        }catch(e){
            console.log(e)
        }
    }
    const PointMenu=({point})=>{
        const [showmenu,setShowMenu] = useState(false);
        const handleMenu =()=>{
            setShowMenu(!showmenu)
        }
        return(
            <> 
                <div style={{display:"flex", flexDirection:'row'}} 
                    onClick={()=>handleMenu()}><p>{point.name}:{point.diem}</p> 
                    {showmenu && 
                    <div className="modal-point">
                        <button className="btn-edit-point" onClick={()=>{handleEditPoint(point)}}>Chỉnh sửa</button>
                        <button className="btn-delete-point" onClick={()=>{handleDeletePoint(point)}}>Xóa</button>
                    </div>}
                </div>
               
            </>
        )
    }
    return (
        <div className="content-point">
            <div className="title">
                <h1 className="mt-4">Quản lí điểm của học viên</h1>
            </div>
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
            <div className="content-point-bot">
            <ModalAddPoint 
                setIsOpen={()=>{setisOpenAddPoint(false)}} 
                isOpen={isOpenAddPoint}
                currentStudent={studentPoint}
                createPoint = {createPoint}
            />
            {
                isOpenEditPoint && 
                <ModalEditPoint
                setIsOpen={()=>{setisOpenEditPoint(false)}} 
                isOpen={isOpenEditPoint}
                currentPoint={studentPoint}
                editPoint = {doEditPoint}
                />
            }
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Mã học viên</th>
                            <th>Họ và tên</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>Diem</th>

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
                                    <td>
                                        <table>
                                            {
                                                item.points.map((point,index)=><PointMenu key={index} point={point} ></PointMenu>)
                                            }
                                        </table>
                                    </td>

                                    <td>
                                        <button className="btn-add-point" onClick={()=>{handleAddPoint(item)}}>Nhập điểm</button>
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
export default pointManager;
