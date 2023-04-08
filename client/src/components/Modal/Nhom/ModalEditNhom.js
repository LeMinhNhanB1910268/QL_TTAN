import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditNhom.scss'



function ModalEditNhom (props){
    const [nhom_id,setNhom_id] = useState('')
    const [name,setName] = useState('')
    const [course_id,setCourse_id] = useState('')
    const [description,setDescription] = useState('')


    useEffect(()=>{
        const nhom = props.currentNhom;
        setName(nhom.nhomEdit.name)
        setCourse_id(nhom.nhomEdit.course_id)
        setDescription(nhom.nhomEdit.description)
        setNhom_id(nhom.nhomEdit.nhom_id)
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
                nhom_id}
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
              >Thêm học viên mới</ModalHeader>
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
                    <div className='input-container max-width-input'>
                        <label>
                           Ma khoa hoc: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setCourse_id(event.target.value)}}
                            value ={course_id}
                        />
                    </div>
                    <div className='input-container '>
                        <label>
                           Thong tin chi tiet: 
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




