import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddCourse.scss'
export default class ModalAddCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            name:'',
            time_start:'',
            time_finish:'',
            price:'',
        }
    }
    componentDidMount(){

    }
    checkInput = () => {
        let isValid  = true
        let arrInput = ['name', 'time_start', 'time_finish', 'price'];
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
    handleAddNewCourse = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.createCourse(this.state);
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
                            Tên khóa học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "name")}}
                            value ={this.state.name}
                        />
                    </div>

                    <div className='input-container'>
                        <label>
                            Thời gian bắt đầu: 
                        </label>
                        <input 
                            type="date" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "time_start")}}
                            value={this.state.time_start}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                            Thời gian kết thúc: 
                        </label>
                        <input 
                            type="date" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "time_finish")}}
                            value={this.state.time_finish}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                            Giá: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{this.handleOnChangeInput(event, "price")}}
                            value={this.state.price}
                        />
                    </div>

                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{this.handleAddNewCourse()}}>
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
