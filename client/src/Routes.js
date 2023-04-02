import React, { useEffect,useState} from "react";
import {Routes, Route} from 'react-router-dom'

import HomePage from './containers/Home/HomePage'
//import Login from './containers/LoginContainer';
import MemberManager from '../src/containers/system/memberManager'
import StudentManager from './containers/system/studentManager'
import NhomtManager from './containers/system/nhomManager'
import AccountManager from './containers/system/accountManager'
import CourseManager from './containers/system/courseManager'
import LoginContainer from './containers/LoginContainer'
import DetailMember from '../src/containers/Detail/DetailMember'
import AccountDetail from '../src/containers/Detail/AccountDetail'
import ClassDetail from '../src/containers/Detail/ClassDetail'
import StudentDetail from '../src/containers/Detail/StudentDetail'
import CourseDetail from '../src/containers/Detail/CourseDetail'
function Router (){
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/member' element={<MemberManager />}></Route>
            <Route path='/student' element={<StudentManager />}></Route>
            <Route path='/nhom' element={<NhomtManager />}></Route>
            <Route path='/account' element={<AccountManager />}></Route>
            <Route path='/course' element={<CourseManager />}></Route>
            <Route path='/login' element={<LoginContainer />}></Route>
            <Route path='/member-detail' element={<DetailMember />}></Route>
            <Route path='/student-detail/:id' element={<StudentDetail />}></Route>
            <Route path='/course-detail' element={<CourseDetail />}></Route>
            <Route path='/class-detail/:id' element={<ClassDetail />}></Route>
            {/* <Route path='/account-detail' element={<AccountDetail />}></Route> */}
        </Routes>
    )
}
export default Router;

