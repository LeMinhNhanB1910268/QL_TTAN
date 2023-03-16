import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddNhom.scss'
export default class ModalAddNhom extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            name:'',
            course_id:'',
            description:'',
        }
    }
    componentDidMount(){

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
    handleAddNewNhom = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.createNhom(this.state);
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
            className='modal-nhom-container'
            > 
              <ModalHeader 
              toggle={()=>{this.props.setIsOpen()}} 
              >Thêm học viên mới</ModalHeader>
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
                <Button color="primary" onClick={()=>{this.handleAddNewNhom()}}>
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
