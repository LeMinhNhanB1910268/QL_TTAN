import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditAccount.scss'
export default class ModalEditAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            account_id: '',
            username:'',
            member_id: '',
            role:'',
        }
    }
    componentDidMount(){
        console.log('mount', this.props.currentAccount)
        let account = this.props.currentAccount;
        if (account && !_.isEmpty(account)){
            this.setState({
                account_id: account.account_id,
                username:account.username,
                role:account.role,
                member_id:account.member_id,
            })
        }
    }
    checkInput = () => {
        let isValid  = true
        let arrInput = ['username', 'role', 'member_id'];
        for (let i=0; i<arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleOnChangeInput = (event, id) => {
        // console.log(event.target.value, id)
        let copyState = {
            ...this.state
        }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
        // console.log('copystate ', copyState)
    }
    handleEditAccount = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.editAccount(this.state);
            // console.log('data model', this.state)
        }
        else {

        }

    }
    render() {
        console.log('check props',this.props)
        console.log('date', this.props.currentAccount.birthday)
        return (
            <div>
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.props.setIsOpen()}}
            size='lg'
            centered
            className='modal-account-container'
            > 
              <ModalHeader 
              toggle={()=>{this.props.setIsOpen()}} 
              >Thay đổi thông tin học viên</ModalHeader>
              <ModalBody>
                <div className='modal-account-body'>
                    <div className='input-container max-width-input'>
                        <label>
                            Username: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "username")}}
                            value ={this.state.username}
                        />
                    </div>

                    <div className='input-container  max-width-input'>
                        <label>
                            Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "member_id")}}
                            value={this.state.member_id}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                            Vai trò: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "role")}}
                            value={this.state.role}
                        />
                    </div>  
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{this.handleEditAccount()}}>
                  Thay đổi
                </Button>{' '}
                <Button color="secondary" onClick={()=>{this.props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        )
    } 
}
