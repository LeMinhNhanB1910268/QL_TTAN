import React, { useEffect,useState} from "react";
import {Routes, Route} from 'react-router-dom'

import HomePage from './containers/Home/HomePage'
//import Login from './containers/LoginContainer';
import MemberManager from '../src/containers/system/memberManager'
import StudentManager from './containers/system/studentManager'
import NhomtManager from './containers/system/nhomManager'
import ReviewStudent from './containers/system/reviewStudent'
import CourseManager from './containers/system/courseManager'
import LoginContainer from './containers/LoginContainer'
import DetailMember from '../src/containers/Detail/DetailMember'
import ClassDetail from '../src/containers/Detail/ClassDetail'
import StudentDetail from '../src/containers/Detail/StudentDetail'
import CourseDetail from '../src/containers/Detail/CourseDetail'
import JoinCourse from '../src/containers/Join/JoinCourse'
import TuitionManager from "./containers/system/tuitionManager";
import PointManager from "./containers/system/pointManager";
import Statistical from "./containers/system/statistical";
import JoinClass from "../src/containers/Join/JoinClass"
function Router (){
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/member' element={<MemberManager />}></Route>
            <Route path='/student' element={<StudentManager />}></Route>
            <Route path='/nhom' element={<NhomtManager />}></Route>
            <Route path='/review-student' element={<ReviewStudent />}></Route>
            <Route path='/course' element={<CourseManager />}></Route>
            <Route path='/tuition-fee' element={<TuitionManager />}></Route>
            <Route path='/login' element={<LoginContainer />}></Route>
            <Route path='/member-detail' element={<DetailMember />}></Route>
            <Route path='/student-detail/:id' element={<StudentDetail />}></Route>
            <Route path='/course-detail' element={<CourseDetail />}></Route>
            <Route path='/class-detail/:id' element={<ClassDetail />}></Route>
            <Route path='/join-class/:id' element={<JoinClass />}></Route>
            <Route path='/join-course/:id' element={<JoinCourse />}></Route>
            <Route path='/point' element={<PointManager />}></Route>
            <Route path='/Statistical' element={<Statistical />}></Route>

            {/* <Route path='/account-detail' element={<AccountDetail />}></Route> */}
        </Routes>
    )
}
export default Router;

