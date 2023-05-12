import React, {useEffect,useState} from "react";
import { useNavigate} from 'react-router-dom';
import './memberManager.css'
import { Button } from "reactstrap";
import {getAllAccount,Search,getUser, createAccountService, deleteAccountService, updateAccountService} from '../../services/accountService'
import ModalAddMember from "../../components/Modal/Member/ModalAddMember";
import ModalEditMember from "../../components/Modal/Member/ModalEditMember";
import DeleteMember from "../../components/Modal/Confirm/DeleteMember";

function MemberManager () {
    const navigate = useNavigate();
    const [user,setUser] = useState('')
    const [arrMember,setArrMember] = useState('')
    const [isOpenNewMember,setisOpenNewMember] = useState(false)
    const [isOpenEditMember,setisOpenEditMember] = useState(false)
    const [isDeleteMember,setisDeleteMember] = useState(false)
    const [memberDelete,setmemberDelete] = useState({})
    const [memberEdit,setmemberEdit] = useState({})
    const [SearchText,setSearchText] = useState('')
    const getMember= async ()=>{
        const data = await getUser();
        setUser(data);
    }
    console.log(user);

    useEffect(()=>{
        getAllMember();
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
          getAllMember();
        }
      }, [SearchText]);
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
    const handleArr = async() => {
        if(SearchText!=''){
            let response = await Search(SearchText);
            if(response){
                setArrMember(response.data)
            }
            // setArrStudent(arrStudent1)
        }else {
            getAllMember();
        }
    }
    const handleAddMenber = () => {
        setisOpenNewMember(true)
    }
    const handleEditMenber = (member) => {
        setisOpenEditMember(true)
        setmemberEdit({
            memberEdit: member
        })
    }
    const doEditMember = async (account) => {
        console.log('save', account)
        try{
            let response = await updateAccountService(account.account_id, account)
   
            setisOpenEditMember(false)
        }catch(e){
            console.log(e)
        }
        getAllMember();
    }
    const createMember = async (account) => {
        try{
            let response = await createAccountService(account);
            console.log('tra ve', response)
            setisOpenNewMember(false)
        }catch(e){
            console.log(e)
        }
        getAllMember();
    }
    // const handleDeleteStudent = async (student) => {
    //     setisDelete(true)
    //     setStudentDelete({
    //         studentDelete: student
    //     })
    // }
    const handleDeleteMember = async (member) => {
        setisDeleteMember(true)
        setmemberDelete({memberDelete: member})
    }
    const deleteMember = async (member) => {
        setisDeleteMember(false)
        try{
            let res = await deleteAccountService(member.account_id)
        }catch(e){
            console.log(e);
        }
        getAllMember();
    }

    const handleDetail =  async (member) => {
        localStorage.setItem('member', JSON.stringify(member));
        navigate('/member-detail')
        console.log(member);
    }
    return (
        <div>
            <div className="title">
                <h1 className="mt-4">Quản lí thành viên của trung tâm</h1>
            </div>
            <div className="row">
                <div className="col-6">
                    <button 
                    className="btn btn-primary btn-add" 
                    onClick={() => {handleAddMenber()}}>
                        <i className="fa-solid fa-plus"></i>Thêm thành viên
                    </button>
                </div>
                    <div className="search col-6">
                    <input placeholder="Nhập tên cần tìm kiếm"
                    onChange={(event)=>{setSearchText(event.target.value)}}
                    value={SearchText}></input>
                </div>
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
                {
                    isDeleteMember &&
                    <DeleteMember 
                    setIsOpen={()=>{setisDeleteMember(false)}} 
                    isOpen={isDeleteMember}
                    currentMember={memberDelete}
                    deleteMember = {deleteMember}
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
                                    <td onClick={()=>{handleDetail(item)}}>{item.name}</td>
                                    <td>{item.sex}</td>
                                    <td>{item.birthday}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.position}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={()=>{handleEditMenber(item)}}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=>{handleDeleteMember(item)}}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        )
                    }
                    </tbody>
                </table>    
        </div>
    )
}
export default MemberManager;
