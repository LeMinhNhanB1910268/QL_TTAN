

import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddMember.scss'





function ModalAddMember (props){
    const [modal,setModal] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [birthday,setBirthday] = useState('')
    const [member_id,setMember] = useState('')
    const [sex,setSex] = useState('')
    const [position,setPosition] = useState('')
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')


    // useEffect(()=>{

    // },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'email', 
            'phone', 
            'birthday',
            'member_id',
            'sex',
            'address',
            'position',
            'username',
            'password',
            'role',
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
    const handleAddNewMember = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {
                name,
                email,
                phone,
                birthday,
                member_id,
                sex,
                address,
                position,
                username,
                password,
                role}
            props.createMember(data);
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
                    <div className='input-container  max-width-input'>
                        <label>
                           Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setMember(event.target.value)}}
                            value={member_id}
                        />
                    </div>
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
                    <div className='input-container '>
                        <label>
                            Địa chỉ: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setAddress(event.target.value)}}
                            value ={address}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Ngày sinh: 
                        </label>
                        <input 
                            type="date" 
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
                           Chức vụ: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPosition(event.target.value)}}
                            value={position}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                           Tên đăng nhập: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setUserName(event.target.value)}}
                            value={username}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                           Mật khẩu: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPassword(event.target.value)}}
                            value={password}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                           Quyền: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setRole(event.target.value)}}
                            value={role}
                        />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddNewMember()}}>
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
export default ModalAddMember

















