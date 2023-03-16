import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddAccount.scss'
export default class ModalAddAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            username:'',
            password:'',
            member_id:'',
            role:''
        }
    }
    componentDidMount(){

    }
    checkInput = () => {
        let isValid  = true
        let arrInput = ['username', 'member_id', 'password', 'role'];
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
    handleAddNewAccount = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.createAccount(this.state);
            // console.log('data model', this.state)
        }
        else {

        }

    }
    // toggle = () => {
    //     this.setState({model: true});
    // }
    render() {
        // console.log(this.props.isOpen)
        return (
            <div>
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.props.setIsOpen()}}
            size='lg'
            centered
            className='modal-student-container'
            > 
              <ModalHeader 
              toggle={()=>{this.props.setIsOpen()}} 
              >Thêm học viên mới</ModalHeader>
              <ModalBody>
                <div className='modal-student-body'>
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
                    <div className='input-container max-width-input'>
                        <label>
                            Password: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "password")}}
                            value ={this.state.password}
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
                <Button color="primary" onClick={()=>{this.handleAddNewAccount()}}>
                  Thêm
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
