import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditNhom.scss'
export default class ModalEditNhom extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            nhom_id: '',
            name:'',
            course_id:'',
            description:'',

        }
    }
    componentDidMount(){
        console.log('mount', this.props.currentNhom)
        let nhom = this.props.currentNhom;
        if (nhom && !_.isEmpty(nhom)){
            this.setState({
                nhom_id: nhom.nhom_id,
                name:nhom.name,
                course_id:nhom.course_id,
                description:nhom.description,
            })
        }
    }
    checkInput = () => {
        let isValid  = true
        let arrInput = ['name', 'course_id'];
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
    handleEditNhom = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.editNhom(this.state);
            // console.log('data model', this.state)
        }
        else {

        }

    }
    render() {
        console.log('check props',this.props)
        // console.log('date', this.props.currentNhom.birthday)
        return (
            <div>
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.props.setIsOpen()}}
            size='lg'
            centered
            className='modal-nhom-container'
            > 
              <ModalHeader 
              toggle={()=>{this.props.setIsOpen()}} 
              >Sửa thành viên</ModalHeader>
              <ModalBody>
                <div className='modal-nhom-body'>
                <div className='input-container'>
                        <label>
                            Tên lớp học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "name")}}
                            value ={this.state.name}
                        />
                    </div>

                    <div className='input-container '>
                        <label>
                            Khóa học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "course_id")}}
                            value={this.state.course_id}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Thông tin chi tiết: 
                        </label>
                        <textarea 
                            rows="4" cols="50"
                            onChange={(event)=>{this.handleOnChangeInput(event, "description")}}
                            value={this.state.description}
                        />
                    </div>    
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{this.handleEditNhom()}}>
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
