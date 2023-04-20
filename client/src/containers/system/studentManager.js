import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './studentManager.css'
import { Button } from "reactstrap";
import {getAllStudent, createStudentService, deleteStudentService, updateStudentService} from '../../services/studentService'
import ModalAddStudent from '../../components/Modal/Student/ModalAddStudent'
import ModalEditStudent from '../../components/Modal/Student/ModalEditStudent'
import { createTuitionService } from "../../services/tuiionfeeService";
import {getUser} from '../../services/accountService'   

function StudentManager () {
    const navigate = useNavigate();
    const [arrStudent,setArrStudent] = useState('')
    const [isOpenNewStudent,setisOpenNewStudent] = useState(false)
    const [isOpenEditStudent,setisOpenEditStudent] = useState(false)
    const [studentEdit,setStudentEdit] = useState({})
    const [user,setUser] = useState('')
    useEffect(()=>{
        getAllStudents();
        getMember();
    },[])

    const getAllStudents = async () => {
        let response = await getAllStudent();
        console.log(response);
        if(response){
            setArrStudent(response.data)
            ,()=> {
                console.log('hihi',arrStudent)
            }
        }
    }
    const getMember= async ()=>{
        const data = await getUser();
        console.log("hihi", data);
        setUser(data);
    }
    const handleAddStudent = () => {
        setisOpenNewStudent( true)
    }
    const handleEditStudent = (student) => {
        setisOpenEditStudent(true)
        setStudentEdit({
            studentEdit: student
        })
    }
    const doEditStudent = async (student) => {
        // console.log('save', student)
        try{
            let response = await updateStudentService(student.student_id, student)
            if (response){
                setisOpenEditStudent(false)
            }
        }catch(e){
            console.log(e)
        }
        getAllStudents();
    }
    const createStudent = async (student) => {
        
        try{
            let response = await createStudentService(student);
            console.log('tra ve', response)
            setisOpenNewStudent(false)
        }catch(e){
            console.log(e)
        }
        getAllStudents();
    }
    const handleDeleteStudent = async (student) => {
        try{
            let res = await deleteStudentService(student.student_id)
        }catch(e){
            console.log(e);
        }
        getAllStudents();
    }
    const handleDetail = (student) => {
        localStorage.setItem('student', JSON.stringify(student));
        navigate({pathname: '/student-detail/'+student.student_id})
    }
    return (
        <div>
            <div className="title">
                <h1 className="mt-4">Quản lí học viên của trung tâm</h1>
            </div>
            {
                user.role == 'admin' ?
                (            <div >
                    <button 
                    className="btn btn-primary btn-add" 
                    onClick={() => {handleAddStudent()}}>
                        <i className="fa-solid fa-plus"></i>Thêm học viên
                    </button>
                </div>
                ): (
                    <></>
                )
            }
            <ModalAddStudent 
                setIsOpen={()=>{setisOpenNewStudent(false)}} 
                isOpen={isOpenNewStudent}
                createStudent = {createStudent}
            />
            {
                isOpenEditStudent &&
                <ModalEditStudent 
                setIsOpen={()=>{setisOpenEditStudent(false)}} 
                isOpen={isOpenEditStudent}
                currentStudent={studentEdit}
                editStudent = {doEditStudent}
                />
            }
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>ID</th> 
                            <th>Họ và tên</th>
                            <th>GIới tính</th>
                            <th>Ngày sinh</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Thao tác</th>
                        </tr>
                        {
                            arrStudent && arrStudent.map((item, index)=>{
                                return (
                                    <tr key={index}> 
                                        <td>{item.student_id}</td>
                                        <td onClick={()=>{handleDetail(item)}}>{item.name}</td>
                                        <td>{item.sex}</td>
                                        <td>{item.birthday}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        {
                                            user.role == 'admin' ?
                                            (           
                                                <td>
                                                    <Button color="warning" className="btn-edit" onClick={()=>{handleEditStudent(item)}}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </Button>
                                                    <Button 
                                                        color="danger" 
                                                        className="btn-delete"
                                                        onClick={()=>{handleDeleteStudent(item)}}
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </Button>
                                                </td>
                                            ): (
                                                <></>
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
export default StudentManager;