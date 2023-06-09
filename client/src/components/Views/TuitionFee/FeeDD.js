import React, {useEffect, useState} from "react";

import {getStateFeeA} from '../../../services/studentService'

export default function FeeDD(props) {

    const [arrDD,setArrDD] = useState('')
    const [ID,setID] = useState(props.nhomid)

    useEffect(()=>{
        if(ID){
            getDaDong();
        }
    },[ID])
    const getDaDong = async () => {
        let response = await getStateFeeA(ID) 
        if(response){
            setArrDD(response)
            console.log(response)
        }
    }
  return (
    <div >
        <h3 className="text-center mt-4">Danh sách học viên đã đóng</h3>
        <table id="customers">
            <tbody>
                <tr>
                    <td>Mã học viên</td>
                    <td>Họ và tên</td>
                    <td>Giới tính</td>
                    <td>Ngày sinh</td>
                    <td>Số điện thoại</td>
                    <td>Email</td>
                </tr>
                {
                    arrDD && arrDD.map((item,index)=>{
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
