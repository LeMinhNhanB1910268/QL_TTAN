import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddStudent.scss'




function ModalAddStudent (props){
    const [modal,setModal] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [birthday,setBirthday] = useState('')
    const [member_id,setStudent] = useState('')
    const [sex,setSex] = useState('')
    const [address,setAddress] = useState('')
    const [nhom_id,setNhom_id] = useState('')


    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'email', 
            'phone', 
            'birthday',
            // 'member_id',
            'sex',
            'nhom_id',
            'address'
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
    const handleAddNewStudent = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {
                name,
                email,
                phone,
                birthday,
                // member_id,
                sex,
                nhom_id, 
                address}
            props.createStudent(data);
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
                    {/* <div className='input-container  max-width-input'>
                        <label>
                           Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setStudent(event.target.value)}}
                            value={member_id}
                        />
                    </div> */}
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
                            Nhóm: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setNhom_id(event.target.value)}}
                            value ={nhom_id}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                           Email: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setEmail(event.target.value)}}
                            value ={email}
                        />
                    </div>
                    <div className='input-container '>
                        <label>
                            Số điện thoại: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPhone(event.target.value)}}
                            value ={phone}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Ngày sinh: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setBirthday(event.target.value)}}
                            value={birthday}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Giới tính: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setSex(event.target.value)}}
                            value={sex}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Địa chỉ: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setAddress(event.target.value)}}
                            value={address}
                        />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddNewStudent()}}>
                  Thêm
                </Button>{' '}
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
        </div>
    )
}
export default ModalAddStudent







