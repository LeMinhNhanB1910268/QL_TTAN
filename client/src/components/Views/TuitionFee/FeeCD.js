import React, {useEffect, useState} from "react";

import {getStateFeeB} from '../../../services/studentService'
export default function FeeCD(props) {

    const [arrCD,setArrCD] = useState('')
    const [ID,setID] = useState(props.nhomid)

    useEffect(()=>{
        if(ID){
            getChuaDong();
        }
    },[ID])
    const getChuaDong = async () => {
        let response = await getStateFeeB(ID) 
        if(response){
            setArrCD(response)
            console.log(response)
        }
    }
  return (
    <div>
        <h3 className="text-center mt-4">Danh sách học viên chưa đóng</h3>
        <table id="customers">
            <tbody>
                <tr>
                    <td>Mã học viên1</td>
                    <td>Họ và tên</td>
                    <td>Giới tính</td>
                    <td>Ngày sinh</td>
                    <td>Số điện thoại</td>
                    <td>Email</td>
                </tr>
                {
                    arrCD && arrCD.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.student_id}</td>
                                <td>{item.name}</td>
                                <td>{item.sex}</td>
                                <td>{item.birthday}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
