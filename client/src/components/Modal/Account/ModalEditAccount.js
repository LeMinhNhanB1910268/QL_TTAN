import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditAccount.scss'


function ModalEditAccount (props){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [account_id,setAccount_id] = useState('')
    const [member_id,setMember_id] = useState('')
    const [role,setRole] = useState('')

    useEffect(()=>{
        const account = props.currentAccount;
        setUsername(account.accountEdit.username)
        setPassword(account.accountEdit.password)
        setAccount_id(account.accountEdit.account_id)
        setMember_id(account.accountEdit.member_id)
        setRole(account.accountEdit.role)
    },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = ['username', 'password', 'role'];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddEditAccount = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            console.log('du lieu edit',account_id,username, password, role, account_id);
            const data = {account_id,member_id,username,password,role}
            console.log('du lieu',data);
            props.editAccount(data);
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
                    <div className='input-container max-width-input'>
                        <label>
                            Username: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setUsername(event.target.value)}}
                            value ={username}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Password: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPassword(event.target.value)}}
                            value ={password}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Mã nhân viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setMember_id(event.target.value)}}
                            value ={member_id}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                            Vai trò: 
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
                <Button color="primary" onClick={()=>{handleAddEditAccount()}}>
                  Thêm
                </Button>{' '}
                <Button color="secondary" onClick={()=>{props.setIsOpen}}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
        </div>
    )
}
export default ModalEditAccount













// export default class ModalEditAccount extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             modal: false,
//             account_id: '',
//             username:'',
//             member_id: '',
//             role:'',
//         }
//     }
//     componentDidMount(){
//         let account = this.props.currentAccount;
//         if (account && !_.isEmpty(account)){
//             this.setState({
//                 account_id: account.account_id,
//                 username:account.username,
//                 role:account.role,
//                 member_id:account.member_id,
//             })
//         }
//     }
//     checkInput = () => {
//         let isValid  = true
//         let arrInput = ['username', 'role', 'member_id'];
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
//     handleEditAccount = () => {
//         let isValid = this.checkInput();
//         console.log(isValid)
//         if (isValid === true) {
//             this.props.editAccount(this.state);
//             // console.log('data model', this.state)
//         }
//         else {

//         }

//     }
//     render() {
//         console.log('check props',this.props)
//         console.log('date', this.props.currentAccount.birthday)
//         return (
//             <div>
//             <Modal 
//             isOpen={this.props.isOpen} 
//             toggle={()=>{this.props.setIsOpen()}}
//             size='lg'
//             centered
//             className='modal-account-container'
//             > 
//               <ModalHeader 
//               toggle={()=>{this.props.setIsOpen()}} 
//               >Thay đổi thông tin học viên</ModalHeader>
//               <ModalBody>
//                 <div className='modal-account-body'>
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
//                 </div>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="primary" onClick={()=>{this.handleEditAccount()}}>
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
