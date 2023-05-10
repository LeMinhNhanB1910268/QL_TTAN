// import React, { Component } from 'react'
import React, { useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom'
import {getUser,updateAccountService} from '../../services/accountService'
import ModalEditMember from "../../components/Modal/Member/ModalEditMember";import './HomePage.scss'
import HomeAdmin from "../../components/Views/Home/HomeAdmin";
import HomeMember from "../../components/Views/Home/HomeMember";



function Homepage (){
    const navigate = useNavigate();
    const [user,setUser] = useState('')
    const [isOpenEditMember,setisOpenEditMember] = useState(false)
    const [memberEdit,setmemberEdit] = useState({})
    const token = localStorage.getItem('token')
    useEffect(()=>{
        getMember();
    },[])
    const getMember= async ()=>{
        const data = await getUser();
        console.log("hihi", data);
        if(data){
            setUser(data);
        }
        if(!token){
            navigate('/login')
        }
    }
    const reload =() => {
        window.location.reload();
    }
    const doEditMember = async (account) => {
        console.log('save', account)
        try{
            let response = await updateAccountService(account.account_id, account)
            if (response){
                setisOpenEditMember(false)
            }
        }catch(e){
            console.log(e)
        }
        getMember();
    }
    const handleUpdate = async () => {
        setisOpenEditMember(true)
        setmemberEdit({
            memberEdit: user
        })
    }
    return (
        <div>
            {
                isOpenEditMember &&
                <ModalEditMember 
                setIsOpen={()=>{setisOpenEditMember(false)}} 
                isOpen={isOpenEditMember}
                currentMember={memberEdit}
                editMember = {doEditMember}
            />
            }
            <div className='row content'>
                <div className='col-sm-6 homepage-left'>
                    <div className='content-left'>
                        <div className="box">
                            <h2 className="title-content text-center">Thông tin nhân viên</h2>
                            <hr />
                            <div className="text-content"><p><label>Mã nhân viên:</label> {user.member_id}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Họ và tên:</label> {user.name}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Địa chỉ email:</label> {user.email}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Ngày sinh:</label> {user.birthday}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Giới tính:</label> {user.sex}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Địa chỉ:</label> {user.address}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Chức vụ:</label> {user.position}</p></div>
                            <hr />
                            <div className="text-content text-center" onClick={()=>{handleUpdate()}}><p>Cập nhật thông tin</p></div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-sm-2 center"></div> */}
                <div className='col-sm-6 homepage-right'>
                    <div className='content-right'>
                        {
                            user.role == 'admin' ? (<HomeAdmin />) : (<HomeMember />)
                        }

                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Homepage;




