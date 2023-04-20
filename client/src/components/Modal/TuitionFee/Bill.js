import React, {useEffect, useState, useRef} from "react";

import { useReactToPrint } from 'react-to-print'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Bill.css'

export default function Bill(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
  return (
    <div className="bill-content">
    <Modal 
    isOpen={props.isOpen} 
    toggle={()=>{props.setIsOpen()}}
    size='md'
    centered
    className='modal-bill-container'
    > 
      <ModalHeader 
      toggle={()=>{props.setIsOpen()}} 
      className="header-modal"
      >In hóa đơn</ModalHeader>
      <ModalBody className="body-modal">
        <div className="body-modal-container" ref={componentRef}>
            <div>
                <h2 className="text-center">Hóa đơn học phí</h2>
                <hr />
                <div className="info-center">
                    <h3>Trung tâm anh ngữ</h3>
                    <p><label>Mã số thuế:</label>1234567890</p>
                    <p><label>Địa chỉ:</label>Địa chỉ: Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ </p>
                    <p><label>Số điện thoại:</label>012345678</p>
                    <p><label>Email:</label>nn.english@gmail.com</p>
                </div>
                <hr />
                <div className="info-student">
                    <h3>Thông tin học viên</h3>
                    <p><label>Họ và tên:</label>1234567890</p>
                    <p><label>Giới tính:</label>1234567890</p>
                    <p><label>Số điện thoại:</label>1234567890</p>
                    <p><label>Email:</label>1234567890</p>
                </div>
                <div className="table">
                    <table style={{border: "1px solid black",}}>
                        <tbody>
                            <tr>
                                <th className="stt">STT</th>
                                <th className="name">Tên khóa học</th>
                                <th className="fee">Học phí</th>
                                <th className="status">Đã thu</th>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className="kyten">
                    <div className="row">
                        <div className="col-6 text-center">
                            <p>Người đóng</p>
                            <p>{"(Kí tên ghi rõ họ tên)"}</p>
                        </div>
                        <div className="col-6 text-center">
                            <p>Người thu</p>
                            <p>{"(Kí tên ghi rõ họ tên)"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={()=>{handlePrint()}}>
        In hóa đơn
        </Button>
        <Button color="secondary" onClick={()=>{props.setIsOpen}}>
          Hủy
        </Button>
      </ModalFooter>
    </Modal>
</div>
  )
}


