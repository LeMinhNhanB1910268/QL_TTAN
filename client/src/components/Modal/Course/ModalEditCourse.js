import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditCourse.scss'
export default class ModalEditCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            course_id: '',
            name:'',
            time_start:'',
            time_finish:'',
            price:'',
        }
    }
    componentDidMount(){
        console.log('mount', this.props.currentCourse)
        let course = this.props.currentCourse;
        if (course && !_.isEmpty(course)){
            this.setState({
                course_id: course.course_id,
                name:course.name,
                time_start:course.time_start,
                price:course.price,
                time_finish:course.time_finish,
            })
        }
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
    handleEditCourse = () => {
        let isValid = this.checkInput();
        console.log(isValid)
        if (isValid === true) {
            this.props.editCourse(this.state);
            // console.log('data model', this.state)
        }
        else {

        }

    }
    render() {
        console.log('check props',this.props)
        console.log('date', this.props.currentCourse.birthday)
        return (
            <div>
            <Modal 
            isOpen={this.props.isOpen} 
            toggle={()=>{this.props.setIsOpen()}}
            size='lg'
            centered
            className='modal-course-container'
            > 
              <ModalHeader 
              toggle={()=>{this.props.setIsOpen()}} 
              >Thay đổi thông tin học viên</ModalHeader>
              <ModalBody>
                <div className='modal-course-body'>
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
                <Button color="primary" onClick={()=>{this.handleEditCourse()}}>
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
