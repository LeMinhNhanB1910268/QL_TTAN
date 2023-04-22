import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function DeleteCourse(props) {
    const [course_id,setCourse_id] = useState('')
    useEffect(()=>{
        const course = props.currentCourse;
        setCourse_id(course.courseDelete.course_id)
    },[])
    const handleDeleteCourse = () => {
            const data = {course_id,}
            props.deleteCourse(data);
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
                <Button color="primary" onClick={()=>{handleDeleteCourse()}}>
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
