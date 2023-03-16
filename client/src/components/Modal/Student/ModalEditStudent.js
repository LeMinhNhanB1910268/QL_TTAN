import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditStudent.scss'
export default class ModalEditStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            student_id: '',
            name:'',
            email:'',
            phone:'',
            birthday:'',
            sex:'',
        }
    }
    componentDidMount(){
        console.log('mount', this.props.currentStudent)
        let student = this.props.currentStudent;
        if (student && !_.isEmpty(student)){
            this.setState({
                student_id: student.student_id,
                name:student.name,
                email:student.email,
                phone:student.phone,
                birthday:student.birthday,
                sex:student.sex,
            })
        }
    }
    checkInput = () => {
        let isValid  = true
        let arrInput = ['name', 'email', 'phone', 'birthday', 'sex'];
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
    handleEditStudent = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.editStudent(this.state);
            // console.log('data model', this.state)
        }
        else {

        }

    }
    render() {
        console.log('check props',this.props)
        console.log('date', this.props.currentStudent.birthday)
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
              >Thay đổi thông tin học viên</ModalHeader>
              <ModalBody>
                <div className='modal-student-body'>
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
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{this.handleEditStudent()}}>
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
