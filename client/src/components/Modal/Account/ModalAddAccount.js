import React, { useEffect,useState} from "react";
// import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddAccount.scss'


function ModalAddAccount (props){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')
    const [member_id,setMember_id] = useState('')

    // useEffect(()=>{

    // },[])

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
    const handleAddNewAccount = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {member_id,username,password,role}
            props.createAccount(data);
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
                            Username: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setUsername(event.target.value)}}
                            value ={username}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Password: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPassword(event.target.value)}}
                            value ={password}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setMember_id(event.target.value)}}
                            value ={member_id}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                            Vai trò: 
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
                <Button color="primary" onClick={()=>{handleAddNewAccount()}}>
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
export default ModalAddAccount





