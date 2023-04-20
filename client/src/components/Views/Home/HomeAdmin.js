import React from 'react'
import Review from '../../../assets/review1.png'
import TuitionFee from '../../../assets/tuitionfee.png'
import Member from '../../../assets/member.png'
import Student from '../../../assets/student.png'
import TK from '../../../assets/tk.png'
import Course from '../../../assets/course.png'
import Nhom from '../../../assets/nhom.png'
import Score from '../../../assets/score.png'

import {Link} from 'react-router-dom'
export default function HomeAdmin() {
  return (
    <div>
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
                <Link to='/tuition-fee'>
                    <button className='bth-item'>
                        <img src={TuitionFee}/><div className='bth-text'>Học phí</div>
                    </button>
                </Link>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-6 item text-center'>
                <Link to='/review-student'>
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
        <div className="row">    
            <div className='col-sm-6 item text-center'>
                <Link to='/point'>
                    <button className='bth-item'>
                        <img src={Score}/>
                        <div className='bth-text'>
                        Chấm điểm
                        </div>
                    </button>
                </Link>
            </div>
            <div className='col-sm-6 item text-center'>
                <Link to='/statistical'>
                    <button className='bth-item'>
                        <img src={TK}/>
                        <div className='bth-text'>
                        Thống kê
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}
