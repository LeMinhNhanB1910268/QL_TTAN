import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalEditPoint.scss'
import {getUser} from '../../../services/accountService'

function ModalEditPoint (props){
    const [point_id,setPoint_id] = useState('')
    const [name,setName] = useState('')
    const [student_id,setStudent_id] = useState('')
    const [diem,setDescription] = useState('')
    const [user,setUser] = useState('')
    const [member_id,setMember_id] = useState('')

    useEffect(()=>{
        const point = props.currentPoint;
        // console.log('point',point)
        setName(point.studentPoint.name)
        setStudent_id(point.studentPoint.student_id)
        setDescription(point.studentPoint.diem)
        setPoint_id(point.studentPoint.point_id)
        getMember();
    },[])
    useEffect(()=>{
        if(user){
            setMember_id(user.member_id);
        }
    },[user])
    const getMember= async ()=>{
        const data = await getUser();
        setUser(data);
    }
    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'student_id', 
            'diem',
            'point_id'];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddEditPoint = () => {
        let isValid = checkInput();
        // console.log(isValid)
        if (isValid) {
            const data = {
                name,
                student_id,
                diem,
                point_id}
            props.editPoint(data);
            // console.log('data',data);
        }
    }
    return(
        <div>
            <Modal 
            isOpen={props.isOpen} 
            toggle={()=>{props.setIsOpen()}}
            size='lg'
            centered
            className='modal-point-container'
            > 
              <ModalHeader 
              toggle={()=>{props.setIsOpen()}} 
              >Chỉnh sửa điểm</ModalHeader>
              <ModalBody>
                <div className='modal-point-body'>
                    <div className='input-container '>
                        <label>
                           Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setStudent_id(event.target.value)}}
                            value ={member_id}
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
                    <div className='input-container'>
                        <label>
                            Kì kiểm tra: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value ={name}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                           Điểm: 
                        </label>
                        <input
                            type="text" 
                            onChange={(event)=>{setDescription(event.target.value)}}
                            value={diem}
                        />
                    </div>                  
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddEditPoint()}}>
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
export default ModalEditPoint




