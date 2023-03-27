import React, {useEffect,useState} from "react";
import './memberManager.css'
import { Button } from "reactstrap";
import {getAllAccount,getUser, createAccountService, deleteAccountService, updateAccountService} from '../../services/accountService'
import ModalAddMember from "../../components/Modal/Member/ModalAddMember";
import ModalEditMember from "../../components/Modal/Member/ModalEditMember";


function MemberManager () {
    const [user,setUser] = useState('')
    const [arrMember,setArrMember] = useState('')
    const [isOpenNewMember,setisOpenNewMember] = useState(false)
    const [isOpenEditMember,setisOpenEditMember] = useState(false)
    const [memberEdit,setmemberEdit] = useState({})
    const getMember= async ()=>{
        const data = await getUser();
        setUser(data);
    }
    console.log(user);

    useEffect(()=>{
        getAllMember();
        getMember();
    },[])

    const getAllMember = async () => {
        let response = await getAllAccount();
        console.log(response);
        if(response){
            setArrMember(response.data)
            ,()=> {
                console.log('hihi',arrAccount)
            }
            
        }
    }
    const handleAddMenber = () => {
        setisOpenNewMember({isOpenNewMember: true})
    }
    const handleEditMenber = (member) => {
        setisOpenEditMember({
            isOpenEditMember: true
        })
        setmemberEdit({
            memberEdit: member
        })
    }
    const doEditMember = async (account) => {
        console.log('save', account)
        try{
            let response = await updateAccountService(account.account_id, account)
            if (response){
                setisOpenEditMember({
                    isOpenEditMember: true
                })
            }
        }catch(e){
            console.log(e)
        }
        getAllMember();
    }
    const createMember = async (account) => {
        try{
            let response = await createAccountService(account);
            console.log('tra ve', response)
            setisOpenNewMember({isOpenNewMember: false})
        }catch(e){
            console.log(e)
        }
        getAllMember();
    }
    const handleDeleteMember = async (member) => {
        try{
            let res = await deleteAccountService(member.account_id)
        }catch(e){
            console.log(e);
        }
        getAllMember();
    }
    const handleDetail = (member) => {
        alert('hihi')
        console.log(member);
    }
    return (
        <div>
            <div className="title">
                    Quản lí thành viên của trung tâm
            </div>
            <div >
                <button 
                className="btn btn-primary btn-add" 
                onClick={() => {handleAddMenber()}}>
                    <i className="fa-solid fa-plus"></i>Thêm thành viên
                </button>
            </div>
                <ModalAddMember 
                setIsOpen={()=>{setisOpenNewMember(false)}} 
                isOpen={isOpenNewMember}
                createMember = {createMember}
                // createAccount = {createAccount}
                />
                {
                    isOpenEditMember &&
                    <ModalEditMember 
                    setIsOpen={()=>{setisOpenEditMember(false)}} 
                    isOpen={isOpenEditMember}
                    currentMember={memberEdit}
                    editMember = {doEditMember}
                />
                }
                <table id="customers">
                    <tbody>
                    <tr>
                        <th>Mã nhân viên</th> 
                        <th>Họ và tên</th>
                        <th>GIới tính</th>
                        <th>Ngày sinh</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Vị trí</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        arrMember && arrMember.map((item, index)=>{
                            return (
                                <tr key={index}> 
                                    <td>{item.member_id}</td>
                                    <td onClick={() => {handleDetail(item)}}>{item.name}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.position}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => {handleEditMenber(item)}}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=> {handleDeleteMember(item)}}
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
    )
}
export default MemberManager;
