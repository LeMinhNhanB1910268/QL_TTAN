import React, {Component} from "react";
import './nhomManager.css'
import { Button } from "reactstrap";
import {getAllNhom, createNhomService, deleteNhomService, updateNhomService} from '../../services/nhomService'
import ModalAddNhom from '../../components/Modal/Nhom/ModalAddNhom'
import ModalEditNhom from '../../components/Modal/Nhom/ModalEditNhom'
class nhomManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrNhom: [],
            arrCourse: [],
            isOpenNewNhom: false,
            isOpenEditNhom: false,
            nhomEdit: {}
        }
    }
    async componentDidMount(){
        await this.getAllNhom();
        // await this.getCourse();
    }

    getAllNhom = async () => {
        let response = await getAllNhom();
        console.log(response)
        if(response){
            this.setState({
                arrNhom: response.data.data
            },()=> {
                console.log(this.state.arrNhom)
            })
            
        }
    }
    getCourse = async () => {
        let response = await this.getCourse(nhom.course_id)
        console.log(response)
        if(response){
            this.setState({
                arrCourse: response.data.data
            },()=> {
                console.log(this.state.arrCourse)
            })
        }
    }
    handleAddNhom = () => {
        this.setState({isOpenNewNhom: true})
    }
    handleEditNhom = (nhom) => {
        console.log('eidt',nhom)
        this.setState({
            isOpenEditNhom: true,
            nhomEdit: nhom
        })

    }
    doEditNhom = async (nhom) => {
        console.log('save', nhom)
        try{
            let response = await updateNhomService(nhom.nhom_id, nhom)
            if (response){
                this.setState({
                    isOpenEditNhom: false
                })
            }
            console.log('đoEit', response)
        }catch(e){
            console.log(e)
        }
        this.getAllNhom();
    }
    // editNhom = async (nhom) => {

    // }
    createNhom = async (data) => {
        try{
            let response = await createNhomService(data);
            // console.log('tra ve', response)
        }catch(e){
            console.log(e)
        }
        // console.log(data)
        // alert('hihi')
        this.getAllNhom();
    }
    handleDeleteNhom = async (nhom) => {
        try{
            // console.log(nhom)
            let res = await deleteNhomService(nhom.nhom_id)

        }catch(e){
            console.log(e);
        }
        this.getAllNhom();
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
                    onClick={() => this.handleAddNhom()}>
                        <i className="fa-solid fa-plus"></i>Thêm lớp học
                    </button>
                </div>
                <ModalAddNhom 
                setIsOpen={()=>this.setState({isOpenNewNhom:false})} 
                isOpen={this.state.isOpenNewNhom}
                createNhom = {this.createNhom}
                />
                {
                    this.state.isOpenEditNhom &&
                    <ModalEditNhom 
                    setIsOpen={()=>this.setState({isOpenEditNhom:false})} 
                    isOpen={this.state.isOpenEditNhom}
                    currentNhom={this.state.nhomEdit}
                    editNhom = {this.doEditNhom}
                />
                }
                <table id="customers">
                    <tbody>
                    <tr>
                        <th>ID</th> 
                        <th>Tên Nhóm</th>
                        <th>Khóa học</th>
                        <th>Chi tiết</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        this.state.arrNhom && this.state.arrCourse && this.state.arrNhom.map((item, index)=>{
                            // console.log('hiih', item, index)
                            return (
 
                                <tr key={index}> 
                                    <td>{item.nhom_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.course_id}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => this.handleEditNhom(item)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=> this.handleDeleteNhom(item)}
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
export default nhomManager;