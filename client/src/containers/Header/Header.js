import React, { useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import './Header.scss'
import {getUser} from '../../services/accountService'
export default function Header() {
    const [user,setUser] = useState('')

    const getMember= async ()=>{
        const data = await getUser();
        setUser(data);
        console.log(user.name)
    }
    useEffect(()=>{
        getMember();
    },[])
    return(
        <div>
            <div className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-9 col-left' >
                            <h2>
                                <img className='logo' src='' />
                                HỆ THỐNG QUẢN LÝ
                            </h2>
                        </div>
                        <div className='col-sm-3 col-right'>
                            <Link to='/'><button><i className="fa-solid fa-house"></i>Trang chủ</button>  </Link>
                            <button><i className="fa-solid fa-right-from-bracket"></i>Đăng xuất</button>
                        </div>
                        <div className="account">Xin chào {user.name}</div>
                    </div>
                </div>
            </div>
        </div>
    ) 

}
