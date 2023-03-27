import React, { useEffect,useState} from "react";
// import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddCourse.scss'




function ModalAddCourse (props){
    const [modal,setModal] = useState('')
    const [name,setName] = useState('')
    const [time_start,setTimeStart] = useState('')
    const [time_finish,setTimeFinish] = useState('')
    const [price,setPrice] = useState('')

    // useEffect(()=>{

    // },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = ['name', 'time_start', 'time_finish', 'price'];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddNewCourse = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {name,time_start,time_finish,price}
            props.createCourse(data);
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
              >Thêm học viên mới</ModalHeader>
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
                            type="text" 
                            onChange={(event)=>{setTimeStart(event.target.value)}}
                            value ={time_start}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Thời gian kết thúc: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setTimeFinish(event.target.value)}}
                            value ={time_finish}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                           Price: 
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
                <Button color="primary" onClick={()=>{handleAddNewCourse()}}>
                  Thêm
                </Button>{' '}
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
            {/* Minh */}
        </div>
    )
}
export default ModalAddCourse



