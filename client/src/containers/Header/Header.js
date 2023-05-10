import React, { useEffect,useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import './Header.scss'
import {getUser} from '../../services/accountService'
import Logout from "../../components/Modal/Confirm/Logout";
export default function Header() {
    const navigate = useNavigate();
    const [user,setUser] = useState('')
    const [isLogout,setisLogout] = useState(false)
    const token = localStorage.getItem('token')
    // const getMember= async ()=>{
    //     const data = await getUser();
    //     setUser(data);
    //     console.log(user.name)
    // }
    // useEffect(()=>{
    //         getMember();
    // },[])
    const handleLogout =() => {
        setisLogout(true)
    }
    const logout = () => {
        setisLogout(false)
        localStorage.clear();
        navigate('/login');
    }
    return(
        <div>
            <div className='header'>
                <Logout 
                    setIsOpen={()=>{setisLogout(false)}} 
                    isOpen={isLogout}
                    logout = {logout}
                />
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-9 col-left' >
                            <h2>
                                {/* <img className='logo' src='' /> */}
                                HỆ THỐNG QUẢN LÝ
                                <p className="name-center">Trung tâm anh ngữ N&N</p>
                            </h2>

                        </div>
                        <div className='col-sm-3 col-right mt-4'>
                            <Link to='/'><button><i className="fa-solid fa-house"></i>Trang chủ</button>  </Link>
                            {
                                token ? (<button onClick={()=>{handleLogout()}}><i className="fa-solid fa-right-from-bracket"></i>Đăng xuất</button>) : (<></>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    ) 

}
