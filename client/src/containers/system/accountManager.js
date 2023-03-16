import React, {Component} from "react";
import './accountManager.css'
import { Button } from "reactstrap";
import {getAllAccount, createAccountService, deleteAccountService, updateAccountService} from '../../services/accountService'
import ModalAddAccount from '../../components/Modal/Account/ModalAddAccount'
import ModalEditAccount from '../../components/Modal/Account/ModalEditAccount'
class accountManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            arrAccount: [],
            isOpenNewAccount: false,
            isOpenEditAccount: false,
            accountEdit: {}
        }
    }
    async componentDidMount(){
        await this.getAllAccount();
        // await this.getCourse();
    }

    getAllAccount = async () => {
        let response = await getAllAccount();
        console.log(response)
        if(response){
            this.setState({
                arrAccount: response.data.data
            },()=> {
                console.log(this.state.arrAccount)
            })
            
        }
    }
    getCourse = async () => {
        let response = await this.getCourse(account.course_id)
        console.log(response)
        if(response){
            this.setState({
                arrCourse: response.data.data
            },()=> {
                console.log(this.state.arrCourse)
            })
        }
    }
    handleAddAccount = () => {
        this.setState({isOpenNewAccount: true})
    }
    handleEditAccount = (account) => {
        console.log('eidt',account)
        this.setState({
            isOpenEditAccount: true,
            accountEdit: account
        })

    }
    doEditAccount = async (account) => {
        console.log('save', account)
        try{
            let response = await updateAccountService(account.account_id, account)
            if (response){
                this.setState({
                    isOpenEditAccount: false
                })
            }
            console.log('đoEit', response)
        }catch(e){
            console.log(e)
        }
        this.getAllAccount();
    }
    // editAccount = async (account) => {

    // }
    createAccount = async (data) => {
        try{
            let response = await createAccountService(data);
            // console.log('tra ve', response)
        }catch(e){
            console.log(e)
        }
        // console.log(data)
        // alert('hihi')
        this.getAllAccount();
    }
    handleDeleteAccount = async (account) => {
        try{
            // console.log(account)
            let res = await deleteAccountService(account.account_id)

        }catch(e){
            console.log(e);
        }
        this.getAllAccount();
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
                    onClick={() => this.handleAddAccount()}>
                        <i className="fa-solid fa-plus"></i>Thêm tài khoản
                    </button>
                </div>
                <ModalAddAccount 
                setIsOpen={()=>this.setState({isOpenNewAccount:false})} 
                isOpen={this.state.isOpenNewAccount}
                createAccount = {this.createAccount}
                />
                {
                    this.state.isOpenEditAccount &&
                    <ModalEditAccount 
                    setIsOpen={()=>this.setState({isOpenEditAccount:false})} 
                    isOpen={this.state.isOpenEditAccount}
                    currentAccount={this.state.accountEdit}
                    editAccount = {this.doEditAccount}
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
                        this.state.arrAccount && this.state.arrAccount.map((item, index)=>{
                            // console.log('hiih', item, index)
                            return (
 
                                <tr key={index}> 
                                    <td>{item.account_id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.role}</td>
                                    <td>{item.member_id}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => this.handleEditAccount(item)}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=> this.handleDeleteAccount(item)}
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
export default accountManager;