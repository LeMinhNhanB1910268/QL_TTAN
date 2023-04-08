import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddNhom.scss'




function ModalAddNhom (props){
    const [modal,setModal] = useState(false)
    const [name,setName] = useState('')
    const [course_id,setCourse_id] = useState('')
    const [description,setDescription] = useState('')



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
                course_id,
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







