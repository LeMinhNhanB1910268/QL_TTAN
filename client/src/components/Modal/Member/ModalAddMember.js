// import React, { Component } from 'react'
import { flatMap } from "lodash";
import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalAddMember.scss'





function ModalAddMember (props){
    const [modal,setModal] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [birthday,setBirthday] = useState('')
    const [member_id,setMember] = useState('')
    const [sex,setSex] = useState('')
    const [position,setPosition] = useState('')
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')


    // useEffect(()=>{

    // },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'email', 
            'phone', 
            'birthday',
            'member_id',
            'sex',
            'position',
            'username',
            'password',
            'role',
        ];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddNewMember = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {
                name,
                email,
                phone,
                birthday,
                member_id,
                sex,
                position,
                username,
                password,
                role}
            props.createMember(data);
        }
        else {

        }
    }
    return(
        <div>
            <Modal 
            isOpen={props.isOpen} 
            toggle={()=>{props.setIsOpen()}}
            size='lg'
            centered
            className='modal-student-container'
            > 
              <ModalHeader 
              toggle={()=>{props.setIsOpen()}} 
              >Thêm học viên mới</ModalHeader>
              <ModalBody>
                <div className='modal-student-body'>
                    <div className='input-container  max-width-input'>
                        <label>
                           Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setMember(event.target.value)}}
                            value={member_id}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Họ và tên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value ={name}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                           Email: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setEmail(event.target.value)}}
                            value ={email}
                        />
                    </div>
                    <div className='input-container '>
                        <label>
                            Số điện thoại: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPhone(event.target.value)}}
                            value ={phone}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Ngày sinh: 
                        </label>
                        <input 
                            type="date" 
                            onChange={(event)=>{setBirthday(event.target.value)}}
                            value={birthday}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Giới tính: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setSex(event.target.value)}}
                            value={sex}
                        />
                    </div>
                    <div className='input-container  '>
                        <label>
                           Chức vụ: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPosition(event.target.value)}}
                            value={position}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                           Tên đăng nhập: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setUserName(event.target.value)}}
                            value={username}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                           Mật khẩu: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPassword(event.target.value)}}
                            value={password}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                           Quyền: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setRole(event.target.value)}}
                            value={role}
                        />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddNewMember()}}>
                  Thêm
                </Button>{' '}
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
            {/* Minh */}
        </div>
    )
}
export default ModalAddMember

















// export default class ModalAddMember extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             modal: false,
//             name:'',
//             email:'',
//             phone:'',
//             birthday:'',
//             member_id: '',
//             sex:'',
//             position:'',
//             username: '',
//             password: '',
//             role: ''
//         }
//     }
//     componentDidMount(){

//     }
//     checkInput = () => {
//         let isValid  = true
//         let arrInput = ['name', 'email', 'phone', 'birthday', 'sex', 'position', 'username', 'password', 'role'];
//         for (let i=0; i<arrInput.length; i++){
//             if(!this.state[arrInput[i]]){
//                 isValid = false;
//                 alert("missing parameter: "+arrInput[i]);
//                 break;
//             }
//         }
//         return isValid;
//     }
//     handleOnChangeInput = (event, id) => {
//         let copyState = {
//             ...this.state
//         }
//         copyState[id] = event.target.value;
//         this.setState({
//             ...copyState
//         })

//     }
//     handleAddNewMember = () => {
//         let isValid = this.checkInput();
//         if (isValid === true) {
//             this.props.createMember(this.state);
//         }
//         else {
//         }

//     }
//     render() {
//         return (
//             <div>
//             <Modal 
//             isOpen={this.props.isOpen} 
//             toggle={()=>{this.props.setIsOpen()}}
//             size='lg'
//             centered
//             className='modal-member-container'
//             > 
//               <ModalHeader 
//               toggle={()=>{this.props.setIsOpen()}} 
//               >Thêm nhân viên mới</ModalHeader>
//               <ModalBody>
//                 <div className='modal-member-body'>
//                     <div className='input-container  max-width-input'>
//                         <label>
//                             Mã nhân viên: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "member_id")}}
//                             value={this.state.member_id}
//                         />
//                     </div>
//                     <div className='input-container max-width-input'>
//                         <label>
//                             Họ và tên: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "name")}}
//                             value ={this.state.name}
//                         />
//                     </div>

//                     <div className='input-container'>
//                         <label>
//                             Email: 
//                         </label>
//                         <input 
//                             type="email" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "email")}}
//                             value={this.state.email}
//                         />
//                     </div>
//                     <div className='input-container'>
//                         <label>
//                             Ngày sinh: 
//                         </label>
//                         <input 
//                             type="date" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "birthday")}}
//                             value={this.state.birthday}
//                         />
//                     </div>
//                     <div className='input-container'>
//                         <label>
//                             Giới tính: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "sex")}}
//                             value={this.state.sex}
//                         />
//                     </div>
//                     <div className='input-container'>
//                         <label>
//                             Số điện thoại: 
//                         </label>
//                         <input  
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "phone")}}
//                             value={this.state.phone}
//                         />
//                     </div>
//                     <div className='input-container max-width-input'>
//                         <label>
//                             Chức vụ: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "position")}}
//                             value={this.state.position}
//                             />
//                     </div>
//                     <div className='input-container max-width-input'>
//                         <label>
//                             Username: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "username")}}
//                             value ={this.state.username}
//                         />
//                     </div>
//                     <div className='input-container max-width-input'>
//                         <label>
//                             Password: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "password")}}
//                             value ={this.state.password}
//                         />
//                     </div>
//                     <div className='input-container  max-width-input'>
//                         <label>
//                             Vai trò: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "role")}}
//                             value={this.state.role}
//                         />
//                     </div>
//                     <ModalFooter>
//                         <Button color="primary" onClick={()=>{this.handleAddNewMember()}}>
//                         Thêm
//                         </Button>{' '}
//                         <Button color="secondary" onClick={()=>{this.props.setIsOpen}}>
//                         Hủy
//                         </Button>
//                     </ModalFooter>
//                 </div>
//               </ModalBody>
//             </Modal>
//           </div>
//         )
//     } 
// }
