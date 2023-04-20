import React, {useEffect, useState} from "react";
import './nhomManager.css'
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {getAllNhom,getClassofMember, createNhomService, deleteNhomService, updateNhomService} from '../../services/nhomService'
import ModalAddNhom from '../../components/Modal/Nhom/ModalAddNhom'
import ModalEditNhom from '../../components/Modal/Nhom/ModalEditNhom'
import {getUser} from '../../services/accountService'


function NhomManager () {
    const navigate = useNavigate();
    const [arrNhom,setArrNhom] = useState('')
    const [arrNhomOfMember,setArrNhomOfMember] = useState('')
    const [isOpenNewNhom,setisOpenNewNhom] = useState(false)
    const [isOpenEditNhom,setisOpenEditNhom] = useState(false)
    const [nhomEdit,setnhomEdit] = useState({})
    const [user,setUser] = useState('')
    const [member_id,setMember_id] = useState('')
    useEffect(()=>{
        getAllNhoms();
    },[])
    useEffect(()=>{
        if(user){
            setMember_id(user.member_id);
        }
    },[user])
    useEffect(()=>{
        getMember();
    },[])
    useEffect(()=>{
        if(member_id){
            getClass();
        }
    },[member_id])
    const getMember= async ()=>{
        const data = await getUser();
        setUser(data);
    }
    const getAllNhoms = async () => {
        let response = await getAllNhom();
        // console.log(response);
        if(response){
            setArrNhom(response.data)
            console.log(response.data);
        }
    }
    const getClass = async () => {
        let response = await getClassofMember(member_id);
        if (response) {
            setArrNhomOfMember(response.data)
            // console.log('member',response.data);
        }
    }
    const handleAddNhom = () => {
        setisOpenNewNhom(true)
    }
    const handleEditNhom = (nhom) => {
        setisOpenEditNhom(true)
        setnhomEdit({
            nhomEdit: nhom
        })
    }
    const doEditNhom = async (nhom) => {
        console.log('save', nhom)
        try{
            let response = await updateNhomService(nhom.nhom_id, nhom)
            if (response){
                setisOpenEditNhom(false)
            }
        }catch(e){
            console.log(e)
        }
        getAllNhoms();
    }
    const createNhom = async (nhom) => {
        console.log(nhom)
        try{
            let response = await createNhomService(nhom);
            setisOpenNewNhom(false)
            console.log(isOpenNewNhom)
        }catch(e){
            console.log(e)
        }
        getAllNhoms();
    }
    const handleDeleteNhom = async (nhom) => {
        try{
            let res = await deleteNhomService(nhom.nhom_id)
            if(res.status===200){
                getAllNhoms();
            }
        }catch(e){
            console.log(e);
        }
    }
    const handleDetail = (id) => {
        navigate({pathname: '/class-detail/'+id})
        // console.log(id);
    }
    return (
        <div>
            <div className="title">
                    Quản lí lớp của trung tâm
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
                        <th>Ngày học</th>
                        <th>Thời gian học</th>
                        <th>Chi tiết</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        user.role == "admin" ? (
                            <>
                                {
                                    arrNhom && arrNhom.map((item, index)=>{
                                        return (
                                            <tr key={index}> 
                                                <td>{item.nhom_id}</td>
                                                <td onClick={()=>{handleDetail(item.nhom_id)}}>{item.name}</td>
                                                <td>{item.course_id}</td>
                                                <td>{item.day}</td>
                                                <td>{item.time}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <Button color="warning" className="btn-edit" onClick={()=>{handleEditNhom(item)}}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </Button>
                                                    <Button 
                                                        color="danger" 
                                                        className="btn-delete"
                                                        onClick={()=>{handleDeleteNhom(item)}}
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <>
                                {
                                    arrNhomOfMember && arrNhomOfMember.map((item, index)=>{
                                        return (
                                            <tr key={index}> 
                                                <td>{item.nhom_id}</td>
                                                <td onClick={()=>{handleDetail(item.nhom_id)}}>{item.name}</td>
                                                <td>{item.course_id}</td>
                                                <td>{item.day}</td>
                                                <td>{item.time}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <Button color="warning" className="btn-edit" onClick={()=>{handleEditNhom(item)}}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </Button>
                                                    <Button 
                                                        color="danger" 
                                                        className="btn-delete"
                                                        onClick={()=>{handleDeleteNhom(item)}}
                                                    >
                                                        <i className="fa-solid fa-trash"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                    </tbody>
                </table>    
        </div>
    )
}

export default NhomManager