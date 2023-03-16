import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditMember.scss'
export default class ModalEditMember extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            member_id: '',
            name:'',
            email:'',
            phone:'',
            birthday:new Date(),
            sex:'',
            position:''
        }
    }
    componentDidMount(){
        console.log('mount', this.props.currentMember)
        let member = this.props.currentMember;
        const date = new Date(member.birthday)
        console.log(date)
        if (member && !_.isEmpty(member)){
            this.setState({
                member_id: member.member_id,
                name:member.name,
                email:member.email,
                phone:member.phone,
                birthday:date.getFullYear()+'-'+String(date.getMonth() + 1).padStart(2, '0')+'-'+String(date.getDate()).padStart(2, '0'),
                sex:member.sex,
                position:member.position
            })
        }
    }
    checkInput = () => {
        let isValid  = true
        let arrInput = ['name', 'email', 'phone', 'birthday', 'sex', 'position'];
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
    handleEditMember = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.editMember(this.state);
            // console.log('data model', this.state)
        }
        else {

        }

    }
    render() {
        console.log('check props',this.props)
        console.log('date', this.props.currentMember.birthday)
        return (
            <div>
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.props.setIsOpen()}}
            size='lg'
            centered
            className='modal-member-container'
            > 
              <ModalHeader 
              toggle={()=>{this.props.setIsOpen()}} 
              >Sửa thành viên</ModalHeader>
              <ModalBody>
                <div className='modal-member-body'>
                    <div className='input-container max-width-input'>
                        <label>
                            Họ và tên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "name")}}
                            value ={this.state.name}
                        />
                    </div>

                    <div className='input-container'>
                        <label>
                            Email: 
                        </label>
                        <input 
                            type="email" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "email")}}
                            value={this.state.email}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                            Ngày sinh: 
                        </label>
                        <input 
                            type="date" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "birthday")}}
                            value={this.state.birthday}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                            Giới tính: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "sex")}}
                            value={this.state.sex}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                            Số điện thoại: 
                        </label>
                        <input  
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "phone")}}
                            value={this.state.phone}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Chức vụ: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "position")}}
                            value={this.state.position}
                            />
                    </div>
                        
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{this.handleEditMember()}}>
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
