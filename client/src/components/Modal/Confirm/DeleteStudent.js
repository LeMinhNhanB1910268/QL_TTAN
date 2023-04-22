import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function DeleteStudent(props) {
    const [student_id,setStudent_id] = useState('')
    useEffect(()=>{
        const student = props.currentStudent;
        setStudent_id(student.studentDelete.student_id)
    },[])
    const handleDeleteStudent = () => {
            const data = {student_id,}
            props.deleteStudent(data);
            console.log('data',data);
        }
  return (
    <div>
        <Modal 
        isOpen={props.isOpen} 
        toggle={()=>{props.setIsOpen()}}
        size='sm'
        centered
        className='modal-review-container'
        > 
            <ModalHeader 
            toggle={()=>{props.setIsOpen()}} 
            >Xác thực thao tác
            </ModalHeader>
            <ModalBody>
                <div className='modal-delete-body'>
                    Bạn có chắc muốn xóa
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>{handleDeleteStudent()}}>
                Đồng ý
                </Button>{' '}
                <Button color="secondary" onClick={()=>{props.setIsOpen()}}>
                Hủy
                </Button>
            </ModalFooter>
        </Modal>
    </div>
  )
}
