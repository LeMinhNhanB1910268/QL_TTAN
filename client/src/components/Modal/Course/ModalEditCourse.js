import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  _ from 'lodash'
import './ModalEditCourse.scss'



function ModalEditCourse (props){
    const [modal,setModal] = useState('')
    const [name,setName] = useState('')
    const [time_start,setTimeStart] = useState('')
    const [time_finish,setTimeFinish] = useState('')
    const [price,setPrice] = useState('')
    const [course_id,setCourse_id] = useState('')

    useEffect(()=>{
        const course = props.currentCourse;
        console.log('course', course);
        setName(course.courseEdit.name)
        setTimeStart(course.courseEdit.time_start)
        setTimeFinish(course.courseEdit.time_finish)
        setCourse_id(course.courseEdit.course_id)
        setPrice(course.courseEdit.price)
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
    const handleAddEditCourse = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {course_id,time_finish,time_start,price,name}
            props.editCourse(data);
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
                            Tên khóa học: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value ={name}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Thời gian bắt đầu: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setTimeStart(event.target.value)}}
                            value ={time_start}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                            Thời gian kết thúc: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setTimeFinish(event.target.value)}}
                            value ={time_finish}
                        />
                    </div>
                    <div className='input-container  max-width-input'>
                        <label>
                            Giá: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setPrice(event.target.value)}}
                            value={price}
                        />
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddEditCourse()}}>
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
export default ModalEditCourse






// export default class ModalEditCourse extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             modal: false,
//             course_id: '',
//             name:'',
//             time_start:'',
//             time_finish:'',
//             price:'',
//         }
//     }
//     componentDidMount(){
//         console.log('mount', this.props.currentCourse)
//         let course = this.props.currentCourse;
//         if (course && !_.isEmpty(course)){
//             this.setState({
//                 course_id: course.course_id,
//                 name:course.name,
//                 time_start:course.time_start,
//                 price:course.price,
//                 time_finish:course.time_finish,
//             })
//         }
//     }
//     checkInput = () => {
//         let isValid  = true
//         let arrInput = ['name', 'time_start', 'time_finish', 'price'];
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
//     handleEditCourse = () => {
//         let isValid = this.checkInput();
//         console.log(isValid)
//         if (isValid === true) {
//             this.props.editCourse(this.state);
//             // console.log('data model', this.state)
//         }
//         else {

//         }

//     }
//     render() {
//         console.log('check props',this.props)
//         console.log('date', this.props.currentCourse.birthday)
//         return (
//             <div>
//             <Modal 
//             isOpen={this.props.isOpen} 
//             toggle={()=>{this.props.setIsOpen()}}
//             size='lg'
//             centered
//             className='modal-course-container'
//             > 
//               <ModalHeader 
//               toggle={()=>{this.props.setIsOpen()}} 
//               >Thay đổi thông tin học viên</ModalHeader>
//               <ModalBody>
//                 <div className='modal-course-body'>
//                 <div className='input-container max-width-input'>
//                         <label>
//                             Tên khóa học: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "name")}}
//                             value ={this.state.name}
//                         />
//                     </div>

//                     <div className='input-container'>
//                         <label>
//                             Thời gian bắt đầu: 
//                         </label>
//                         <input 
//                             type="date" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "time_start")}}
//                             value={this.state.time_start}
//                         />
//                     </div>
//                     <div className='input-container'>
//                         <label>
//                             Thời gian kết thúc: 
//                         </label>
//                         <input 
//                             type="date" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "time_finish")}}
//                             value={this.state.time_finish}
//                         />
//                     </div>
//                     <div className='input-container'>
//                         <label>
//                             Giá: 
//                         </label>
//                         <input 
//                             type="text" 
//                             onChange={(event)=>{this.handleOnChangeInput(event, "price")}}
//                             value={this.state.price}
//                         />
//                     </div>  
//                 </div>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="primary" onClick={()=>{this.handleEditCourse()}}>
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
