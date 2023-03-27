import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getAllAccount, createAccountService, deleteAccountService, updateAccountService} from '../../services/accountService'
import './Header.scss'
// import Logo from './6046ed03ade41de8c2eac342c688a348.png'
export default class ModalHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            arrAccount: [],
        }
    }
    async componentDidMount(){
        await this.getAllAccount();
    }
    getAllAccount = async () => {
        let response = await getAllAccount();
        // console.log(response)
        if(response){
            this.setState({
                arrAccount: response.data.data
            },()=> {
                // console.log(this.state.arrAccount)
            })
            
        }
    }
    render(){
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

                                {

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

        
    }
}