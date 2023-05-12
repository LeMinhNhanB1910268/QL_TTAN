import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalEditNhom.scss'



function ModalEditNhom (props){
    const [nhom_id,setNhom_id] = useState('')
    const [name,setName] = useState('')
    const [course_id,setCourse_id] = useState('')
    const [description,setDescription] = useState('')
    const [time,setTime] = useState('')
    const [day,setDay] = useState('')
    const [member_id,setMember_id] = useState('')


    useEffect(()=>{
        const nhom = props.currentNhom;
        setName(nhom.nhomEdit.name)
        setCourse_id(nhom.nhomEdit.course_id)
        setDescription(nhom.nhomEdit.description)
        setNhom_id(nhom.nhomEdit.nhom_id)
        setTime(nhom.nhomEdit.time)
        setDay(nhom.nhomEdit.day)
        setMember_id(nhom.nhomEdit.member_id)
    },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'course_id', 
            'description',
            'nhom_id'];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddEditNhom = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {
                name,
                course_id,
                description,
                nhom_id,
                time,
                day,
                member_id}
            props.editNhom(data);
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
              >Thay đổi thông tin nhóm</ModalHeader>
              <ModalBody>
                <div className='modal-nhom-body'>
                    <div className='input-container max-width-input'>
                        <label>
                            Họ và tên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value ={name}
                        />
                    </div>
                    <div className='input-container'>
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
                            value={description}
                        />
                    </div>                  
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddEditNhom()}}>
                  Thay đổi
                </Button>{' '}
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
        </div>
    )
}
export default ModalEditNhom




