import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditMember.scss'


function ModalEditMember (props){
    const [modal,setModal] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [birthday,setBirthday] = useState('')
    const [member_id,setMember] = useState('')
    const [sex,setSex] = useState('')
    const [address,setAddress] = useState('')
    const [position,setPosition] = useState('')
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [role,setRole] = useState('')
    const [account_id,setAccount] = useState('')

    useEffect(()=>{
        const member = props.currentMember;
        console.log('member', member);
        setName(member.memberEdit.name)
        setEmail(member.memberEdit.email)
        setPhone(member.memberEdit.phone)
        setBirthday(member.memberEdit.birthday)
        setMember(member.memberEdit.member_id)
        setSex(member.memberEdit.sex)
        setAddress(member.memberEdit.address)
        setPosition(member.memberEdit.position)
        setUserName(member.memberEdit.username)
        setPassword(member.memberEdit.password)
        setRole(member.memberEdit.role)
        setAccount(member.memberEdit.account_id)
    },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'email', 
            'phone', 
            'birthday',
            'member_id',
            'sex',
            'address',
            'position',
            'username',
            'password',
            'role',
            'account_id'];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddEditMember = () => {
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
                address,
                position,
                username,
                password,
                role,
                account_id}
            props.editMember(data);
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
                            type="text" 
                            onChange={(event)=>{setBirthday(event.target.value)}}
                            value={birthday}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Địa chỉ: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setAddress(event.target.value)}}
                            value ={address}
                        />
                    </div>
                    <div className='input-container '>
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
                <Button color="primary" onClick={()=>{handleAddEditMember()}}>
                  Thay đổi
                </Button>{' '}
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
        </div>
    )
}
export default ModalEditMember













// export default class ModalEditMember extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             modal: false,
//             member_id: '',
//             account_id: '',
//             name:'',
//             email:'',
//             phone:'',
//             birthday:new Date(),
//             sex:'',
//             position:''
//         }
//     }
//     componentDidMount(){
//         console.log('mount', this.props.currentMember)
//         let account = this.props.currentMember;
//         const date = new Date(account.birthday)
//         console.log(date)
//         if (account && !_.isEmpty(account)){
//             this.setState({
//                 member_id: account.member_id,
//                 account_id: account.account_id,
//                 name:account.name,
//                 email:account.email,
//                 phone:account.phone,
//                 birthday:date.getFullYear()+'-'+String(date.getMonth() + 1).padStart(2, '0')+'-'+String(date.getDate()).padStart(2, '0'),
//                 sex:account.sex,
//                 position:account.position
//             })
//         }
//     }
//     checkInput = () => {
//         let isValid  = true
//         let arrInput = ['name', 'email', 'phone', 'birthday', 'sex', 'position'];
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
//         // console.log(event.target.value, id)
//         let copyState = {
//             ...this.state
//         }
//         copyState[id] = event.target.value;
//         this.setState({
//             ...copyState
//         })
//         // console.log('copystate ', copyState)
//     }
//     handleEditMember = () => {
//         let isValid = this.checkInput();
//         console.log(isValid)
//         if (isValid === true) {
//             this.props.editMember(this.state);
//             // console.log('data model', this.state)
//         }
//         else {

//         }

//     }
//     render() {
//         // console.log('check props',this.props)
//         // console.log('date', this.props.currentMember.birthday)
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
//               >Sửa thành viên</ModalHeader>
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
                        
//                 </div>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="primary" onClick={()=>{this.handleEditMember()}}>
//                   Thay đổi
//                 </Button>{' '}
//                 <Button color="secondary" onClick={()=>{this.props.setIsOpen}}>
//                   Hủy
//                 </Button>
//               </ModalFooter>
//             </Modal>
//           </div>
//         )
//     } 
// }
