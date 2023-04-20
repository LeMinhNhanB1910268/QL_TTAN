import React, { useEffect, useState} from "react";
import './courseManager.css'
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {getAllCourse, createCourseService, deleteCourseService, updateCourseService} from '../../services/courseService'
import ModalAddCourse from '../../components/Modal/Course/ModalAddCourse'
import ModalEditCourse from '../../components/Modal/Course/ModalEditCourse'
import {getUser} from '../../services/accountService'

function CourseManager () {
    const navigate = useNavigate();
    const [arrCourse,setArrCourse] = useState('')
    const [isOpenNewCourse,setisOpenNewCourse] = useState(false)
    const [isOpenEditCourse,setisOpenEditCourse] = useState(false)
    const [courseEdit,setCourseEdit] = useState({})
    const [courseid] = useState(JSON.parse(localStorage.getItem('course')))
    const [user,setUser] = useState('')

    useEffect(()=>{
        getAllCourses();
        getMember();
    },[])
    const getMember= async ()=>{
        const data = await getUser();
        console.log("hihi", data);
        setUser(data);
    }
    const getAllCourses = async () => {
        let response = await getAllCourse();
        if(response){
            setArrCourse(response.data)
        }
    }
    const handleAddCourse = () => {
        setisOpenNewCourse(true)
    }
    const handleEditCourse = (course) => {
        setisOpenEditCourse(true)
        setCourseEdit({
            courseEdit: course
        })
    }
    const doEditCourse = async (course) => {
        console.log('save', course)
        try{
            let response = await updateCourseService(course.course_id, course)
            if (response){
                setisOpenEditCourse(false)
            }
        }catch(e){
            console.log(e)
        }
        getAllCourses();
    }
    const createCourse = async (course) => {
        try{
            let response = await createCourseService(course);
            console.log('tra ve', response)
            setisOpenNewCourse(false)
        }catch(e){
            console.log(e)
        }
        getAllCourses();
    }
    const handleDeleteCourse = async (course) => {
        try{

            let res = await deleteCourseService(course.course_id)

        }catch(e){
            console.log(e);
        }
        getAllCourses();
    }
    const handleDetail = (course) => {
        localStorage.setItem('course', JSON.stringify(course));
        navigate('/course-detail')
        console.log(course);
    }
    const handleJoinCourse = (course_id) => {
        navigate('/join-course/'+course_id)
    }
    return (
        <div>
            <div className="title">
                <h1 className="mt-4">Quản lí khóa học của trung tâm</h1>
            </div>
            {
                user.role == 'admin' ?
                (
                    <div >
                        <button 
                            className="btn btn-primary btn-add" 
                            onClick={()=>{handleAddCourse()}}>
                            <i className="fa-solid fa-plus"></i>Thêm khóa học
                        </button>
                    </div>
                ):
                (
                    <></>
                )
            }
            <ModalAddCourse 
            setIsOpen={()=>{setisOpenNewCourse(false)}} 
            isOpen={isOpenNewCourse}
            createCourse = {createCourse}
            />
            {
                isOpenEditCourse &&
                <ModalEditCourse 
                setIsOpen={()=>{setisOpenEditCourse(false)}} 
                isOpen={isOpenEditCourse}
                currentCourse={courseEdit}
                editCourse = {doEditCourse}
            />
            }
            <table id="customers">
                <tbody>
                    <tr>
                        <th>ID</th> 
                        <th onClick={()=>{handleDetail(item)}}>Tên khóa học</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        arrCourse && arrCourse.map((item, index)=>{
                            return (
                                <tr key={index}> 
                                        <td>{item.course_id}</td>
                                        <td onClick={()=>{handleDetail(item)}}>{item.name}</td>
                                        <td>{item.time_start}</td>
                                        <td>{item.time_finish}</td>
                                        <td>{item.price}</td>
                                        {
                                            user.role == 'admin' ? 
                                            (
                                                <td>
                                                <Button color="warning" className="btn-edit" onClick={()=>{handleEditCourse(item)}}>
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </Button>
                                                <Button 
                                                    color="danger" 
                                                    className="btn-delete"
                                                    onClick={()=>{handleDeleteCourse(item)}}
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </Button>
                                                <Button color="success" className="btn-join" onClick={()=>{handleJoinCourse(item.course_id)}}>
                                                    <i className="fa-solid fa-right-to-bracket"></i>
                                                </Button>
                                            </td>
                                            ) :
                                            (
                                                <td>     
                                                    <Button color="success" className="btn-join" onClick={()=>{handleJoinCourse(item.course_id)}}>
                                                        <i className="fa-solid fa-right-to-bracket"></i>
                                                    </Button>
                                                </td>
                                            )
                                        }


                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CourseManager;