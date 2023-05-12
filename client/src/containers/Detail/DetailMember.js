import React, { useEffect,useState} from "react";

import './MemberDetail.scss'
function MemberDetail (){

    const [member] = useState(JSON.parse(localStorage.getItem('member')))

    return (
        <div className="container">
            <div className="content-member-detail">
                <div className="title-Member">
                    <h1>Thông tin chi tiết</h1>
                </div>
                <div className="content-Member mt-3">
                    <h3>Thông tin thành viên</h3>
                    <p><label>Họ và tên:</label>{member.name}</p>
                    <p><label>Địa chỉ:</label>{member.address}</p>
                    <p><label>Giới tinh:</label>{member.sex}</p> 
                    <p><label>Số điện thoại:</label>{member.phone}</p>
                    <p><label>Email:</label>{member.email}</p> 
                    <p><label>Chức vụ:</label>{member.position}</p> 
                </div>
            </div>
        </div>
    )
}
export default MemberDetail;

