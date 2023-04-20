import React, { useEffect,useState} from "react";
import './accountManager.css'
import { Button } from "reactstrap";
import {getAllAccount,getUser,createAccountNoMemberService, createAccountService, deleteAccountService, updateAccountService} from '../../services/accountService'
import ModalAddAccount from '../../components/Modal/Account/ModalAddAccount'
import ModalEditAccount from '../../components/Modal/Account/ModalEditAccount'

function AccountManager (){
    const [user,setUser] = useState('')
    const [arrAccount,setArrAccount] = useState('')
    const [isOpenNewAccount,setisOpenNewAccount] = useState(false)
    const [isOpenEditAccount,setisOpenEditAccount] = useState(false)
    const [accountEdit,setAccountEdit] = useState({})
    useEffect(()=>{
        getAllAccounts();
        getMember();
    },[])
    const getAllAccounts = async () => {
        let response = await getAllAccount();
        console.log(response);
        if(response){
            setArrAccount(response.data)
            ,()=> {
                console.log('hihi',arrAccount)
            }
        }
    }
    const getMember= async ()=>{
        const data = await getUser();
        setUser(data);
    }
    // console.log(user);
    const handleAddAccount = () => {
        setisOpenNewAccount({isOpenNewAccount: true})
    }
    const handleEditAccount = (account) => {
        setisOpenEditAccount({
            isOpenEditAccount: true
        })
        setAccountEdit({
            accountEdit: account
        })
    }
    const doEditAccount = async (account) => {
        console.log('save1', account.username)
        console.log('edit',account);
        try{
            let response = await updateAccountService(account.account_id, account)
            if (response){
                setisOpenEditAccount({
                    isOpenEditAccount: true
                })
            }
        }catch(e){
            console.log(e)
        }
        getAllAccounts();
    }
    const createAccount = async (account) => {
        try{
            // console.log(account)
            let response = await createAccountNoMemberService(account);
            console.log('tra ve', response)
            setisOpenNewAccount(false)
        }catch(e){
            console.log(e)
        }
        getAllAccounts();
    }
    const handleDeleteAccount = async (account) => {
        try{
            let res = await deleteAccountService(account.account_id)
        }catch(e){
            console.log(e);
        }
        getAllAccounts();
    }
    const handleDetail = (account) => {
        alert('hihi')
        console.log(account);
    }
    return (
        <div>
            <div className="title">
                <h1 className="mt-4">Quản lí tài khoản của trung tâm</h1>
            </div>
            <div >
                <button 
                    className="btn btn-primary btn-add" 
                    onClick={() => {handleAddAccount()}}>
                    <i className="fa-solid fa-plus"></i>Thêm tài khoản
                </button>
            </div>
            <ModalAddAccount 
            setIsOpen={()=>{setisOpenNewAccount(false)}} 
            isOpen={isOpenNewAccount}
            createAccount = {createAccount}
            />
            {
                isOpenEditAccount &&
                <ModalEditAccount 
                setIsOpen={()=>{setisOpenEditAccount(false)}} 
                isOpen={isOpenEditAccount}
                currentAccount={accountEdit}
                editAccount = {doEditAccount}
            />
            }
            <table id="customers">
                <tbody>
                    <tr>
                        <th>ID</th> 
                        <th>Username</th>
                        <th>Vai trò</th>
                        <th>Sở hữu</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        arrAccount && arrAccount.map((item, index)=>{
                            return (
                                <tr key={index}> 
                                    <td>{item.account_id}</td>
                                    <td onClick={()=>{handleDetail(item)}}>{item.username}</td>
                                    <td>{item.role}</td>
                                    <td>{item.member_id}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={()=>{handleEditAccount(item)}}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=>{handleDeleteAccount(item)}}
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
export default AccountManager;

