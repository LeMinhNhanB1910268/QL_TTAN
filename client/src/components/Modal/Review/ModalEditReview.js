import React, { useEffect,useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalEditReview.scss'


function ModalEditReview (props){
    const [review_id,setReview_id] = useState('')
    const [name,setName] = useState('')
    const [student_id,setCourse_id] = useState('')
    const [detail,setDescription] = useState('')


    useEffect(()=>{
        const review = props.currentReview;
        console.log('review',review)
        setName(review.studentReview.name)
        setCourse_id(review.studentReview.student_id)
        setDescription(review.studentReview.detail)
        setReview_id(review.studentReview.review_id)
    },[])

    const checkInput = () => {
        let isValid  = true
        let arrInput = [
            'name', 
            'student_id', 
            'detail',
            'review_id'];
        for (let i=0; i<arrInput.length; i++){
            if(!arrInput[i]){
                isValid = false;
                alert("missing parameter: "+arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    const handleAddEditReview = () => {
        let isValid = checkInput();
        console.log(isValid)
        if (isValid) {
            const data = {
                name,
                student_id,
                detail,
                review_id}
            props.editReview(data);
            console.log('data',data);
        }
    }
    return(
        <div>
            <Modal 
            isOpen={props.isOpen} 
            toggle={()=>{props.setIsOpen()}}
            size='lg'
            centered
            className='modal-review-container'
            > 
              <ModalHeader 
              toggle={()=>{props.setIsOpen()}} 
              >Thêm học viên mới</ModalHeader>
              <ModalBody>
                <div className='modal-review-body'>
                    <div className='input-container '>
                        <label>
                           Mã học viên: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setCourse_id(event.target.value)}}
                            value ={student_id}
                        />
                    </div>
                    <div className='input-container'>
                        <label>
                            Tên đánh giá: 
                        </label>
                        <input 
                            type="text" 
                            onChange={(event)=>{setName(event.target.value)}}
                            value ={name}
                        />
                    </div>
                    <div className='input-container max-width-input'>
                        <label>
                           Nội dung: 
                        </label>
                        <textarea
                            type="text" 
                            onChange={(event)=>{setDescription(event.target.value)}}
                            value={detail}
                        />
                    </div>                  
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={()=>{handleAddEditReview()}}>
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
export default ModalEditReview




