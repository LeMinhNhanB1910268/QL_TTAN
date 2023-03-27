// import React, { Component } from 'react'
import React, { useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import {getAllAccount,getUser, createAccountService, deleteAccountService, updateAccountService} from '../../services/accountService'
import './HomePage.scss'
import Review from '../../assets/review1.png'
import TuitionFee from '../../assets/tuitionfee.png'
import Member from '../../assets/member.png'
import Student from '../../assets/student.png'
import TK from '../../assets/tk.png'
import Course from '../../assets/course.png'
import Nhom from '../../assets/nhom.png'


//hoc sinh
//tkb
//

function Homepage (){
    const [user,setUser] = useState('')
    // const [arrAccount,setArrAccount] = useState('')


    useEffect(()=>{
        getMember();
    },[])
    const getMember= async ()=>{
        const data = await getUser();
        console.log("hihi", data);
        setUser(data);
    }


    return (
        <div>
            <div className='row content'>
                <div className='col-sm-6 homepage-left'>
                    <div className='content-left'>
                        <div className="box">
                            <h2 className="title-content text-center">Thông tin nhân viên</h2>
                            <hr />
                            <div className="text-content"><p><label>Mã nhân viên:</label> {user.member_id}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Họ và tên:</label> {user.name}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Địa chỉ email:</label> {user.email}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Ngày sinh:</label> {user.birthday}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Giới tính:</label> {user.sex}</p></div>
                            <hr />
                            <div className="text-content"><p><label>Chức vụ:</label> {user.position}</p></div>
                            <hr />
                        </div>
                    </div>
                </div>
                {/* <div className="col-sm-2 center"></div> */}
                <div className='col-sm-6 homepage-right'>
                    <div className='content-right'>
                        <div className='row'>
                            <div className='col-sm-6 item text-center'>
                                <Link to='/member'>
                                    <button className='bth-item'>
                                        <img src={Member}/>
                                        <div className='bth-text'>Nhân viên</div>
                                    </button>
                                </Link>
                            </div>
                            <div className='col-sm-6 item text-center'> 
                                <Link to='/student'>
                                    <button className='bth-item'>
                                        <img src={Student}/>
                                        <div className='bth-text'>
                                            Học viên
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6 item text-center'>
                                <Link to='/course'>
                                    <button className='bth-item'>
                                    <img src={Course}/><div className='bth-text'>Khóa học</div>
                                    </button>
                                </Link>

                            </div>
                            <div className='col-sm-6 item text-center'>
                                <button className='bth-item'>
                                <img src={TuitionFee}/><div className='bth-text'>Học phí</div>
                                </button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-6 item text-center'>
                                <Link to='/account'>
                                    <button className='bth-item'>
                                        <img src={Review} className='review'/>
                                        <div className='bth-text'>Đánh giá</div>
                                    </button>
                                </Link>
                                </div>
                            <div className='col-sm-6 item text-center'>
                                
                                <Link to='/nhom'>
                                    <button className='bth-item'>
                                        <img src={Nhom}/>
                                        <div className='bth-text'>
                                        Lớp học
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Homepage;



// export default class ModalAddMember extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             arrAccount: [],
//         }
//     }
//     async componentDidMount(){
//         await this.getAllAccount();
//     }
//     getAllAccount = async () => {
//         let response = await getAllAccount();
//         // console.log(response)
//         if(response){
//             this.setState({
//                 arrAccount: response.data.data
//             },()=> {
//                 console.log(this.state.arrAccount)
//             })
            
//         }
//     }
//     render() {
//         // console.log(this.props.isOpen)
//         return (
//             <div>
//                 <div className='row content'>
//                     <div className='col-sm-6 homepage-left'>
//                         <div className='content-left'>

//                         </div>
//                     </div>
//                     <div className='col-sm-6 homepage-right'>
//                         <div className='content-right'>
//                             <div className='row'>
//                                 <div className='col-sm-6 item text-center'>
//                                     <button className='bth-item'>
//                                         <img src={Member}/>
//                                         <div className='bth-text'>Cá nhân</div>
//                                     </button>
//                                 </div>
//                                 <div className='col-sm-6 item text-center'> 
//                                     <button className='bth-item'>
//                                         <img src={Student}/>
//                                         <div className='bth-text'>
//                                             Học viên
//                                         </div>
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='row'>
//                                 <div className='col-sm-6 item text-center'>
//                                     <button className='bth-item'>
//                                     <img src={Course}/><div className='bth-text'>Khóa học</div>
//                                     </button>
//                                 </div>
//                                 <div className='col-sm-6 item text-center'>
//                                     <button className='bth-item'>
//                                     <img src={TuitionFee}/><div className='bth-text'>Học phí</div>
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className='row'>
//                                 <div className='col-sm-6 item text-center'>
//                                     <button className='bth-item'>
//                                         {/* <i className="fa-solid fa-comment"></i> */}
//                                         <img src={Review} className='review'/>
//                                         <div className='bth-text'>Đánh giá</div>
//                                     </button>
//                                     </div>
//                                 <div className='col-sm-6 item text-center'>
//                                     <button className='bth-item'>
//                                         <img src={Nhom}/>
//                                         <div className='bth-text'>
//                                         Lớp học
//                                         </div>
//                                     </button>
//                                 </div>
//                             </div>
                            
//                             <Link to='/member'>member </Link>
//                             <Link to='/student'>student </Link>
//                             <Link to='/nhom'>nhom </Link>
//                             <Link to='/course'>course </Link>
//                             <Link to='/account'>account </Link>
//                         </div>
//                     </div>
//                 </div>
//           </div>
//         )
//     } 
// }
