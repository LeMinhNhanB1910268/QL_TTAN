import React, { useEffect,useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import {getAllCourse,getCourse, getClass} from '../../services/courseService'
import {createNhomService, deleteNhomService, updateNhomService, getNhom} from '../../services/nhomService'
import ModalAddNhom from '../../components/Modal/Nhom/ModalAddNhom'
import ModalEditNhom from '../../components/Modal/Nhom/ModalEditNhom'
function JoinCourse (){
    const navigate = useNavigate();
    const { id } = useParams();
    const [arrCourse,setArrCourse] = useState('')
    const [Course,setCourse] = useState('')
    const [arrNhom,setArrNhom] = useState('')
    const [isOpenNewNhom,setisOpenNewNhom] = useState(false)
    const [isOpenEditNhom,setisOpenEditNhom] = useState(false)
    const [nhomEdit,setnhomEdit] = useState({})
    useEffect(()=>{
        getAllCourses();
        getNhom();
    },[])

    const getAllCourses = async () => {
        let response = await getAllCourse();
        if(response){
            setArrCourse(response.data)
            // console.log(response.data);
        }
    }
    const getNhom = async () => {
        let response = await getClass(id)
        if (response){
            setCourse(response.data.data)
            // console.log('khoahoc',response.data.data);
        }
    }
    const handleAddNhom = () => {
        setisOpenNewNhom( true)
    }
    const handleEditNhom = (nhom) => {
        setisOpenEditNhom(true)
        setnhomEdit({
            nhomEdit: nhom
        })
    }
    const doEditNhom = async (nhom) => {
        // console.log('save', nhom)
        try{
            let response = await updateNhomService(nhom.nhom_id, nhom)
            if (response){
                setisOpenEditNhom(true)
            }
        }catch(e){
            console.log(e)
        }
        getAllCourses();
    }
    const createNhom = async (nhom) => {
        console.log()
        try{
            let response = await createNhomService(nhom);
            // console.log('tra ve', response)
            setisOpenNewNhom(false)
        }catch(e){
            console.log(e)
        }
        getAllCourses();
    }
    const handleDeleteNhom = async (nhom) => {
        try{
            let res = await deleteNhomService(nhom.nhom_id)
        }catch(e){
            console.log(e);
        }
        getAllCourses();
    }
    const handleDetail = (nhom_id) => {
        navigate({pathname: '/class-detail/'+nhom_id})
    }
    return (
        <div>
            <div className="title">
                    Quản lí nhóm của trung tâm
            </div>
            <div >
                <button 
                className="btn btn-primary btn-add" 
                onClick={() => {handleAddNhom()}}>
                    <i className="fa-solid fa-plus"></i>Thêm nhóm
                </button>
            </div>
                <ModalAddNhom 
                setIsOpen={()=>{setisOpenNewNhom(false)}} 
                isOpen={isOpenNewNhom}
                createNhom = {createNhom}
                />
                {
                    isOpenEditNhom &&
                    <ModalEditNhom 
                    setIsOpen={()=>{setisOpenEditNhom(false)}} 
                    isOpen={isOpenEditNhom}
                    currentNhom={nhomEdit}
                    editNhom = {doEditNhom}
                />
                }
                <table id="customers">
                    <tbody>
                    <tr>
                        <th>ID</th> 
                        <th>Tên Nhóm</th>
                        <th>Khóa học</th>
                        <th>Chi tiết</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        Course.get_class && Course.get_class.map((item, index)=>{
                            // console.log('classname', item);
                            return (
                                <tr key={index}> 
                                    <td>{item.nhom_id}</td>
                                    <td onClick={()=>{handleDetail(item.nhom_id)}}>{item.name}</td>
                                    <td>{item.course_id}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => {handleEditNhom(item)}}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </Button>
                                        <Button 
                                            color="danger" 
                                            className="btn-delete"
                                            onClick={()=> {handleDeleteNhom(item)}}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                            })
                    }
                    </tbody>
                </table>    
        </div>
    )
}
export default JoinCourse;

