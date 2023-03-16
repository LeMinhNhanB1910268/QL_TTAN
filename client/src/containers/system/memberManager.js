import React, {Component} from "react";
import './memberManager.css'
import { Button } from "reactstrap";
import {getAllMember, createMemberService, deleteMemberService, updateMemberService} from '../../services/memberService'
import ModalAddMember from "../../components/Modal/Member/ModalAddMember";
import ModalEditMember from "../../components/Modal/Member/ModalEditMember";
class memberManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrMember: [],
            isOpenNewMember: false,
            isOpenEditMember: false,
            memberEdit: {}
        }
    }
    async componentDidMount(){
        await this.getAllMember();
    }

    getAllMember = async () => {
        let response = await getAllMember();
        console.log(response)
        if(response){
            this.setState({
                arrMember: response.data.data
            },()=> {
                console.log(this.state.arrMember)
            })
            
        }
    }
    handleAddMenber = () => {
        this.setState({isOpenNewMember: true})
    }
    handleEditMenber = (member) => {
        console.log('eidt',member)
        this.setState({
            isOpenEditMember: true,
            memberEdit: member
        })

    }
    doEditMember = async (member) => {
        console.log('save', member)
        try{
            let response = await updateMemberService(member.member_id, member)
            if (response){
                this.setState({
                    isOpenEditMember: false
                })
            }
            console.log('đoEit', response)
        }catch(e){
            console.log(e)
        }
        this.getAllMember();
    }
    // editMember = async (member) => {

    // }
    createMember = async (data) => {
        try{
            let response = await createMemberService(data);
            // console.log('tra ve', response)
            this.setState({isOpenNewMember: false})
        }catch(e){
            console.log(e)
        }
        // console.log(data)
        // alert('hihi')
        this.getAllMember();
    }
    handleDeleteMember = async (member) => {
        try{
            // console.log(member)
            let res = await deleteMemberService(member.member_id)

        }catch(e){
            console.log(e);
        }
        this.getAllMember();
    }
    render(){
        return (
            <div>
                <div className="title">
                    Quản lí thành viên của trung tâm
                </div>
                <div >
                    <button 
                    className="btn btn-primary btn-add" 
                    onClick={() => this.handleAddMenber()}>
                        <i className="fa-solid fa-plus"></i>Thêm thành viên
                    </button>
                </div>
                <ModalAddMember 
                setIsOpen={()=>this.setState({isOpenNewMember:false})} 
                isOpen={this.state.isOpenNewMember}
                createMember = {this.createMember}
                />
                {
                    this.state.isOpenEditMember &&
                    <ModalEditMember 
                    setIsOpen={()=>this.setState({isOpenEditMember:false})} 
                    isOpen={this.state.isOpenEditMember}
                    currentMember={this.state.memberEdit}
                    editMember = {this.doEditMember}
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
                        <th>hihih</th>
                        <th>Số điện thoại</th>
                        <th>Vị trí</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        this.state.arrMember && this.state.arrMember.map((item, index)=>{
                            // console.log('hiih', item, index)
                            return (
 
                                <tr key={index}> 
                                    <td>{item.member_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.email}</td>
                                    {/* <td>{item.account.username}</td> */}
                                    <td>{item.phone}</td>
                                    <td>{item.position}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => this.handleEditMenber(item)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=> this.handleDeleteMember(item)}
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
export default memberManager;