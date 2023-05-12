import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './studentManager.css'
import { Button } from "reactstrap";
import {getAllStudent,Search, createStudentService, deleteStudentService, updateStudentService} from '../../services/studentService'
import ModalAddStudent from '../../components/Modal/Student/ModalAddStudent'
import ModalEditStudent from '../../components/Modal/Student/ModalEditStudent'
import Delete from "../../components/Modal/Confirm/DeleteStudent";
import { createTuitionService } from "../../services/tuiionfeeService";
import {getUser} from '../../services/accountService'   

function StudentManager () {
    const navigate = useNavigate();
    const [arrStudent,setArrStudent] = useState('')
    const [arrStudent1,setArrStudent1] = useState('')
    const [isOpenNewStudent,setisOpenNewStudent] = useState(false)
    const [isOpenEditStudent,setisOpenEditStudent] = useState(false)
    const [studentEdit,setStudentEdit] = useState({})
    const [studentDelete,setStudentDelete] = useState({})
    const [isDelete,setisDelete] = useState(false)
    const [SearchText,setSearchText] = useState('')
    const [user,setUser] = useState('')
    const [studentID,setStudentID] = useState('')
    useEffect(()=>{
        getAllStudents();
        getMember();

    },[])
    useEffect(()=>{
        if(SearchText){
            handleArr();
        }
    },[SearchText])
    useEffect(() => {
        if (SearchText === '') {
          setSearchText('');
          getAllStudents();
        }
      }, [SearchText]);
    // console.log('search', SearchText);  
    // console.log('admin',arrStudent);
    const getAllStudents = async () => {
        let response = await getAllStudent();
        // console.log(response);
        if(response){
            setArrStudent(response.data)
        }
    }
    const handleArr = async() => {
        if(SearchText!=''){
            let response = await Search(SearchText);
            if(response){
                setArrStudent(response.data)
            }
            // setArrStudent(arrStudent1)
        }else {
            getAllStudents();
        }
    }
    const SearchStudent = async () => {


    }
    const getMember= async ()=>{
        const data = await getUser();
        // console.log("hihi", data);
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
            let response = await createStudentService(student)
            let IDst = response.data.data.student_id;
            createTuitionService({ student_id: IDst, status: 'Chưa đóng' });
            setStudentID(response.data.data.student_id)
            console.log('tra ve', response.data.data.student_id)
            setisOpenNewStudent(false)
        }catch(e){
            console.log(e)
        } 
        getAllStudents();
    }
    const handleDeleteStudent = async (student) => {
        setisDelete(true)
        setStudentDelete({
            studentDelete: student
        })
    }
    const deleteStudent = async (student) => {
        setisDelete(false)
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
                (            
                <div className="row">
                    <div className="col-6">
                    <button 
                        className="btn btn-primary btn-add"
                        id="myInput" 
                        onClick={() => {handleAddStudent()}}>
                        <i className="fa-solid fa-plus"></i>Thêm học viên
                    </button>
                    </div>
                    <div className="search col-6">
                        <input placeholder="Nhập tên cần tìm kiếm"
                        onChange={(event)=>{setSearchText(event.target.value)}}
                        value={SearchText}></input>
                    </div>
                </div>
                
                ): (
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="search col-6">
                            <input placeholder="Nhập tên cần tìm kiếm"
                            onChange={(event)=>{setSearchText(event.target.value)}}
                            value={SearchText}></input>
                        </div> 
                    </div>

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
            {
                isDelete &&             
                <Delete 
                setIsOpen={()=>{setisDelete(false)}} 
                isOpen={isDelete}
                currentStudent={studentDelete}
                deleteStudent = {deleteStudent}
                />
            }
 <table id="customers">
    <tbody>
        <tr>
            <th><span>ID</span></th> 
            <th><span>Họ và tên</span></th>
            <th><span>GIới tính</span></th>
            <th><span>Ngày sinh</span></th>
            <th><span>Email</span></th>
            <th><span>Số điện thoại</span></th>
            {user.role == 'admin' ? (
                <th><span>Thao tác</span></th>
            ) : null}
        </tr>
        {arrStudent && arrStudent.map((item, index) => {
            return (
                <tr key={index}> 
                    <td><span>{item.student_id}</span></td>
                    <td onClick={() => { handleDetail(item) }}><span>{item.name}</span></td>
                    <td><span>{item.sex}</span></td>
                    <td><span>{item.birthday}</span></td>
                    <td><span>{item.email}</span></td>
                    <td><span>{item.phone}</span></td>
                    {user.role == 'admin' ? (
                        <td>
                            <Button color="warning" className="btn-edit" onClick={() => { handleEditStudent(item) }}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Button>
                            <Button color="danger" className="btn-delete" onClick={() => { handleDeleteStudent(item) }}>
                                <i className="fa-solid fa-trash"></i>
                            </Button>
                        </td>
                    ) : null}
                </tr>
            );
        })}
        <div className="space">
        
        </div>
    </tbody>

</table>

        </div>
    )
}
export default StudentManager;