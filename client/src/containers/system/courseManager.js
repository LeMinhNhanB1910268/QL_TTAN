import React, { useEffect, useState} from "react";
import './courseManager.css'
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {getAllCourse, createCourseService, deleteCourseService, updateCourseService} from '../../services/courseService'
import ModalAddCourse from '../../components/Modal/Course/ModalAddCourse'
import ModalEditCourse from '../../components/Modal/Course/ModalEditCourse'


function CourseManager () {
    const navigate = useNavigate();
    const [arrCourse,setArrCourse] = useState('')
    const [isOpenNewCourse,setisOpenNewCourse] = useState(false)
    const [isOpenEditCourse,setisOpenEditCourse] = useState(false)
    const [courseEdit,setCourseEdit] = useState({})


    useEffect(()=>{
        getAllCourses();
    },[])
    const getAllCourses = async () => {
        let response = await getAllCourse();
        // console.log('hihi',response);
        if(response){
            setArrCourse(response.data)
            ,()=> {
                // console.log('hihi',arrCourse)
            }
        }
    }
    const handleAddCourse = () => {
        setisOpenNewCourse({isOpenNewCourse: true})
    }
    const handleEditCourse = (course) => {
        setisOpenEditCourse({
            isOpenEditCourse: true
        })
        setCourseEdit({
            courseEdit: course
        })
    }
    const doEditCourse = async (course) => {
        console.log('save', course)
        try{
            let response = await updateCourseService(course.course_id, course)
            if (response){
                setisOpenEditCourse({
                    isOpenEditCourse: true
                })
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
            setisOpenNewCourse({isOpenNewCourse: false})
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
    const handleJoinCourse = () => {
        navigate('/nhom')
    }
    return (
        <div>
            <div className="title">
                Quản lí khóa học của trung tâm
            </div>
            <div >
                <button 
                    className="btn btn-primary btn-add" 
                    onClick={() => {handleAddCourse()}}>
                    <i className="fa-solid fa-plus"></i>Thêm khóa học
                </button>
            </div>
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
                    <th onClick={() => {handleDetail(item)}}>Tên khóa học</th>
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
                                    <Button color="success" className="btn-join" onClick={()=>{handleJoinCourse()}}>
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                    </Button>
                                </td>
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