import React, { Component } from 'react'
import './Footer.scss'
export default class ModalFooter extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <hr />
                <div className='footer-top text-center'>
                    <h3>Thông tin liên hệ</h3>
                    <p>Địa chỉ: Khu II, Đ. 3/2, Xuân Khánh, Ninh Kiều, Cần Thơ <br/>
                    Hotline: 19000091 <br />
                    Email: anhnguNN@gmail.com</p>
                </div>
                <hr />
                <div className='footer-bot'>

                </div>
            </div>
        )
    }
}