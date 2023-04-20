
import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './ModalAddReview.scss'
import {getUser} from '../../../services/accountService'
function ModalAddReview (props){
    const [name,setName] = useState('')
    const [detail,setDetail] = useState('')
    const [member_id,setMember_id] = useState('')
    const [student_id,setStudent_id] = useState('')
    const [user,setUser] = useState('')
    
    useEffect(()=>{
        if(props.isOpen){
            setStudent_id(props.currentStudent.studentReview.student_id)
        }
    },[props.isOpen])
    useEffect(()=>{
        if(user){
            setMember_id(user.member_id);
        }
    },[user])
    useEffect(()=>{
        getMember();
    },[])
    const getMember= async ()=>{
        const data = await getUser();
        setUser(data);
    }
    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'detail', 
            'student_id', 
            'member_id',
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
    const handleAddNewReview = () => {
        // updateInput();
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {
                name,
                detail,
                member_id:user.member_id,
                student_id,}
            console.log('save',data)
            props.createReview(data)
        // await createReviewService(data);
        }
    }
    return(
        <div>
            <Modal 
            isOpen={props.isOpen} 
            toggle={()=>{props.setIsOpen()}}
            size='lg'
            centered
            className='modal-review-container'
            > 
              <ModalHeader 
              toggle={()=>{props.setIsOpen()}} 
              >Thêm nhận xét</ModalHeader>
              <ModalBody>
                <div className='modal-review-body'>
                    <div className='input-container '>
                        <label>
                           Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setMember_id(event.target.value)}}
                            value={member_id}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                            Mã học viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setStudent_id(event.target.value)}}
                            value ={student_id}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Tên đánh giá: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value={name}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                           Chi tiết: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setDetail(event.target.value)}}
                            value ={detail}
                        />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddNewReview()}}>
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
export default ModalAddReview
