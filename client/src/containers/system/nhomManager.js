import React, {useEffect, useState} from "react";
import './nhomManager.css'
import { Button } from "reactstrap";
import {getAllNhom, createNhomService, deleteNhomService, updateNhomService} from '../../services/nhomService'
import ModalAddNhom from '../../components/Modal/Nhom/ModalAddNhom'
import ModalEditNhom from '../../components/Modal/Nhom/ModalEditNhom'



function NhomManager () {
    const [arrNhom,setArrNhom] = useState('')
    const [isOpenNewNhom,setisOpenNewNhom] = useState(false)
    const [isOpenEditNhom,setisOpenEditNhom] = useState(false)
    const [nhomEdit,setnhomEdit] = useState({})

    useEffect(()=>{
        getAllNhoms();
    },[])

    const getAllNhoms = async () => {
        let response = await getAllNhom();
        console.log(response);
        if(response){
            setArrNhom(response.data)
            ,()=> {
                console.log('hihi',arrNhom)
            }
            
        }
    }
    const handleAddMenber = () => {
        setisOpenNewNhom({isOpenNewNhom: true})
    }
    const handleEditMenber = (nhom) => {
        setisOpenEditNhom({
            isOpenEditNhom: true
        })
        setnhomEdit({
            nhomEdit: nhom
        })
    }
    const doEditNhom = async (account) => {
        console.log('save', account)
        try{
            let response = await updateNhomService(account.account_id, account)
            if (response){
                setisOpenEditNhom({
                    isOpenEditNhom: true
                })
            }
        }catch(e){
            console.log(e)
        }
        getAllNhom();
    }
    const createNhom = async (account) => {
        try{
            let response = await createNhomService(account);
            console.log('tra ve', response)
            setisOpenNewNhom({isOpenNewNhom: false})
        }catch(e){
            console.log(e)
        }
        getAllNhom();
    }
    const handleDeleteNhom = async (nhom) => {
        try{
            let res = await deleteNhomService(nhom.account_id)
        }catch(e){
            console.log(e);
        }
        getAllNhom();
    }
    const handleDetail = (nhom) => {
        alert('hihi')
        console.log(nhom);
    }
    return (
        <div>
            <div className="title">
                    Quản lí thành viên của trung tâm
            </div>
            <div >
                <button 
                className="btn btn-primary btn-add" 
                onClick={() => {handleAddMenber()}}>
                    <i className="fa-solid fa-plus"></i>Thêm thành viên
                </button>
            </div>
                <ModalAddNhom 
                setIsOpen={()=>{setisOpenNewNhom(false)}} 
                isOpen={isOpenNewNhom}
                createNhom = {createNhom}
                // createNhom = {createNhom}
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
                        arrNhom && arrNhom.map((item, index)=>{
                            return (
                                <tr key={index}> 
                                    <td>{item.nhom_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.course_id}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button color="warning" className="btn-edit" onClick={() => {handleEditMenber(item)}}>
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

export default NhomManager