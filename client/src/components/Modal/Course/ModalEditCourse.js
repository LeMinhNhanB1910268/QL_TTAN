import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditCourse.scss'



function ModalEditCourse (props){
    const [modal,setModal] = useState('')
    const [name,setName] = useState('')
    const [time_start,setTimeStart] = useState('')
    const [time_finish,setTimeFinish] = useState('')
    const [price,setPrice] = useState('')
    const [course_id,setCourse_id] = useState('')

    useEffect(()=>{
        const course = props.currentCourse;
        console.log('course', course);
        setName(course.courseEdit.name)
        setTimeStart(course.courseEdit.time_start)
        setTimeFinish(course.courseEdit.time_finish)
        setCourse_id(course.courseEdit.course_id)
        setPrice(course.courseEdit.price)
    },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = ['username', 'password', 'role'];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddEditCourse = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {course_id,time_finish,time_start,price,name}
            props.editCourse(data);
        }
        else {

        }

    }
    return(
        <div>
            <Modal 
            isOpen={props.isOpen} 
            toggle={()=>{props.setIsOpen()}}
            size='lg'
            centered
            className='modal-student-container'
            > 
              <ModalHeader 
              toggle={()=>{props.setIsOpen()}} 
              >Chỉnh sủa khóa học</ModalHeader>
              <ModalBody>
                <div className='modal-student-body'>
                    <div className='input-container max-width-input'>
                        <label>
                            Tên khóa học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value ={name}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Thời gian bắt đầu: 
                        </label>
                        <input 
                            type="date" 
                            onChange={(event)=>{setTimeStart(event.target.value)}}
                            value ={time_start}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Thời gian kết thúc: 
                        </label>
                        <input 
                            type="date" 
                            onChange={(event)=>{setTimeFinish(event.target.value)}}
                            value ={time_finish}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                            Giá: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPrice(event.target.value)}}
                            value={price}
                        />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddEditCourse()}}>
                  Thay đổi
                </Button>
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>

        </div>
    )
}
export default ModalEditCourse






