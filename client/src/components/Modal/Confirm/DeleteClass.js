import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function DeleteClass(props) {
    const [nhom_id,setClass_id] = useState('')
    useEffect(()=>{
        const nhom = props.currentClass;
        setClass_id(nhom.nhomDelete.nhom_id)
    },[])
    const handleDeleteClass = () => {
            const data = {nhom_id,}
            props.deleteNhom(data);
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
                <Button color="primary" onClick={()=>{handleDeleteClass()}}>
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
