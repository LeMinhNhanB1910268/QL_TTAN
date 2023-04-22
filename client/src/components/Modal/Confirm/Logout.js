import React, { useEffect,useState} from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function Logout(props) {
    const handleLogout = () => {
        props.logout();
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
                    Bạn có chắc muốn đăng xuất
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={()=>{handleLogout()}}>
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
