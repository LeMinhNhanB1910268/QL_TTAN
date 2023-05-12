import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddNhom.scss'




function ModalAddNhom (props){
    const [modal,setModal] = useState(false)
    const [name,setName] = useState('')
    const [course_id,setCourse_id] = useState('')
    const [description,setDescription] = useState('')
    const [time,setTime] = useState('')
    const [day,setDay] = useState('')
    const [member_id,setMember_id] = useState('')



    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'course_id', 
            'description', 
        ];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddNewNhom = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {
                name,
                description,
                time,
                day,
                course_id,
                member_id,
            }
            props.createNhom(data);
        }
    }
    return(
        <div>
            <Modal 
            isOpen={props.isOpen} 
            toggle={()=>{props.setIsOpen()}}
            size='lg'
            centered
            className='modal-nhom-container'
            > 
              <ModalHeader 
              toggle={()=>{props.setIsOpen()}} 
              >Thêm học viên mới</ModalHeader>
              <ModalBody>
                <div className='modal-nhom-body'>
                    <div className='input-container max-width-input'>
                        <label>
                            Tên nhóm: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value ={name}
                        />
                    </div>
                    <div className='input-container '>
                        <label>
                           Mã khóa học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setCourse_id(event.target.value)}}
                            value ={course_id}
                        />
                    </div>
                    <div className='input-container '>
                        <label>
                           Thời gian học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setTime(event.target.value)}}
                            value ={time}
                        />
                    </div>
                    <div className='input-container '>
                        <label>
                           Ngày học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setDay(event.target.value)}}
                            value ={day}
                        />
                    </div>
                    <div className='input-container '>
                        <label>
                           Giáo viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setMember_id(event.target.value)}}
                            value ={member_id}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Thông tin chi tiết: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setDescription(event.target.value)}}
                            value ={description}
                        />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddNewNhom()}}>
                  Thêm
                </Button>
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
        </div>
    )
}
export default ModalAddNhom







