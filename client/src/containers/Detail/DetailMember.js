import React, { useEffect,useState} from "react";

import './MemberDetail.scss'
function MemberDetail (){

    const [member] = useState(JSON.parse(localStorage.getItem('member')))

    useEffect(()=>{
    },[])
    return (
        <div className="container">
            <div className="title-Member">
                <h1>Thông tin học viên</h1>
            </div>
            <div className="content-Member">
                <div>
                    <label>
                        <h3>Họ và tên: </h3>
                    </label>
                    <p>{member.name}</p>
                </div>
                <div>
                    <label>
                        <h3>Địa chỉ: </h3>
                    </label>
                    <p>{member.name}</p>
                </div>
                <div>
                    <label>
                        <h3>Giới tinh: </h3>
                    </label>
                    <p>{member.sex}</p>
                </div>
                <div>
                    <label>
                        <h3>Số điện thoại: </h3>
                    </label>
                    <p>{member.phone}</p>
                </div>
                <div>
                    <label>
                        <h3>Email: </h3>
                    </label>
                    <p>{member.email}</p>
                </div>
            </div>
        </div>
    )
}
export default MemberDetail;

