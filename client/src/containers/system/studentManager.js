import React, {Component} from "react";
import './studentManager.css'
import { Button } from "reactstrap";
import {getAllStudent, createStudentService, deleteStudentService, updateStudentService} from '../../services/studentService'
import ModalAddStudent from '../../components/Modal/Student/ModalAddStudent'
import ModalEditStudent from '../../components/Modal/Student/ModalEditStudent'
class studentManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrStudent: [],
            isOpenNewStudent: false,
            isOpenEditStudent: false,
            studentEdit: {}
        }
    }
    async componentDidMount(){
        await this.getAllStudent();
    }

    getAllStudent = async () => {
        let response = await getAllStudent();
        console.log(response)
        if(response){
            this.setState({
                arrStudent: response.data.data
            },()=> {
                console.log(this.state.arrStudent)
            })
            
        }
    }
    handleAddStudent = () => {
        this.setState({isOpenNewStudent: true})
    }
    handleEditStudent = (student) => {
        console.log('eidt',student)
        this.setState({
            isOpenEditStudent: true,
            studentEdit: student
        })

    }
    doEditStudent = async (student) => {
        console.log('save', student)
        try{
            let response = await updateStudentService(student.student_id, student)
            if (response){
                this.setState({
                    isOpenEditStudent: false
                })
            }
            console.log('đoEit', response)
        }catch(e){
            console.log(e)
        }
        this.getAllStudent();
    }
    // editStudent = async (student) => {

    // }
    createStudent = async (data) => {
        try{
            let response = await createStudentService(data);
            // console.log('tra ve', response)
        }catch(e){
            console.log(e)
        }
        // console.log(data)
        // alert('hihi')
        this.getAllStudent();
    }
    handleDeleteStudent = async (student) => {
        try{
            // console.log(student)
            let res = await deleteStudentService(student.student_id)

        }catch(e){
            console.log(e);
        }
        this.getAllStudent();
    }
    render(){
        return (
            <div>
                <div className="title">
                    Quản lí học viên của trung tâm
                </div>
                <div >
                    <button 
                    className="btn btn-primary btn-add" 
                    onClick={() => this.handleAddStudent()}>
                        <i className="fa-solid fa-plus"></i>Thêm học viên
                    </button>
                </div>
                <ModalAddStudent 
                setIsOpen={()=>this.setState({isOpenNewStudent:false})} 
                isOpen={this.state.isOpenNewStudent}
                createStudent = {this.createStudent}
                />
                {
                    this.state.isOpenEditStudent &&
                    <ModalEditStudent 
                    setIsOpen={()=>this.setState({isOpenEditStudent:false})} 
                    isOpen={this.state.isOpenEditStudent}
                    currentStudent={this.state.studentEdit}
                    editStudent = {this.doEditStudent}
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
                        this.state.arrStudent && this.state.arrStudent.map((item, index)=>{
                            // console.log('hiih', item, index)
                            return (
 
                                <tr key={index}> 
                                    <td>{item.student_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => this.handleEditStudent(item)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=> this.handleDeleteStudent(item)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                            })
                    }
                    </tbody>


                </table>
            </div>
        );
    }
}
export default studentManager;