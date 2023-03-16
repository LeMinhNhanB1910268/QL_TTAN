import React, {Component} from "react";
import './courseManager.css'
import { Button } from "reactstrap";
import {getAllCourse, createCourseService, deleteCourseService, updateCourseService} from '../../services/courseService'
import ModalAddCourse from '../../components/Modal/Course/ModalAddCourse'
import ModalEditCourse from '../../components/Modal/Course/ModalEditCourse'
class courseManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrCourse: [],
            isOpenNewCourse: false,
            isOpenEditCourse: false,
            courseEdit: {}
        }
    }
    async componentDidMount(){
        await this.getAllCourse();
        // await this.getCourse();
    }

    getAllCourse = async () => {
        let response = await getAllCourse();
        console.log(response)
        if(response){
            this.setState({
                arrCourse: response.data.data
            },()=> {
                console.log(this.state.arrCourse)
            })
            
        }
    }
    getCourse = async () => {
        let response = await this.getCourse(course.course_id)
        console.log(response)
        if(response){
            this.setState({
                arrCourse: response.data.data
            },()=> {
                console.log(this.state.arrCourse)
            })
        }
    }
    handleAddCourse = () => {
        this.setState({isOpenNewCourse: true})
    }
    handleEditCourse = (course) => {
        console.log('eidt',course)
        this.setState({
            isOpenEditCourse: true,
            courseEdit: course
        })

    }
    doEditCourse = async (course) => {
        console.log('save', course)
        try{
            let response = await updateCourseService(course.course_id, course)
            if (response){
                this.setState({
                    isOpenEditCourse: false
                })
            }
            console.log('đoEit', response)
        }catch(e){
            console.log(e)
        }
        this.getAllCourse();
    }
    // editCourse = async (course) => {

    // }
    createCourse = async (data) => {
        try{
            let response = await createCourseService(data);
            // console.log('tra ve', response)
        }catch(e){
            console.log(e)
        }
        // console.log(data)
        // alert('hihi')
        this.getAllCourse();
    }
    handleDeleteCourse = async (course) => {
        try{
            // console.log(course)
            let res = await deleteCourseService(course.course_id)

        }catch(e){
            console.log(e);
        }
        this.getAllCourse();
    }
    render(){
        return (
            <div>
                <div className="title">
                    Quản lí tài khoản của trung tâm
                </div>
                <div >
                    <button 
                    className="btn btn-primary btn-add" 
                    onClick={() => this.handleAddCourse()}>
                        <i className="fa-solid fa-plus"></i>Thêm khóa học
                    </button>
                </div>
                <ModalAddCourse 
                setIsOpen={()=>this.setState({isOpenNewCourse:false})} 
                isOpen={this.state.isOpenNewCourse}
                createCourse = {this.createCourse}
                />
                {
                    this.state.isOpenEditCourse &&
                    <ModalEditCourse 
                    setIsOpen={()=>this.setState({isOpenEditCourse:false})} 
                    isOpen={this.state.isOpenEditCourse}
                    currentCourse={this.state.courseEdit}
                    editCourse = {this.doEditCourse}
                />
                }
                <table id="customers">
                    <tbody>
                    <tr>
                        <th>ID</th> 
                        <th>Tên khóa học</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        this.state.arrCourse && this.state.arrCourse.map((item, index)=>{
                            // console.log('hiih', item, index)
                            return (
 
                                <tr key={index}> 
                                    <td>{item.course_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.time_start}</td>
                                    <td>{item.time_finish}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => this.handleEditCourse(item)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=> this.handleDeleteCourse(item)}
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
export default courseManager;