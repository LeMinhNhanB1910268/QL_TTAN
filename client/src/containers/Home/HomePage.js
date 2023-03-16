import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ModalAddMember extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){

    }
    render() {
        // console.log(this.props.isOpen)
        return (
            <div>
                <Link to='/'>Home </Link>
                <Link to='/member'>member </Link>
                <Link to='/student'>student </Link>
                <Link to='/nhom'>nhom </Link>
                <Link to='/course'>course </Link>
                <Link to='/account'>account </Link>
          </div>
        )
    } 
}
