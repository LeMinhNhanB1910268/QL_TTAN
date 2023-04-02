import React, { Component } from 'react';

import './App.scss'

// import HomePage from './containers/Home/HomePage'
// import MemberManager from '../src/containers/system/memberManager'
// import StudentManager from './containers/system/studentManager'
// import NhomtManager from './containers/system/nhomManager'
// import AccountManager from './containers/system/accountManager'
// import CourseManager from './containers/system/courseManager'
// import LoginContainer from './containers/LoginContainer'
// import DetailMember from '../src/containers/Detail/DetailMember'
// import AccountDetail from '../src/containers/Detail/AccountDetail'
// import ClassDetail from '../src/containers/Detail/ClassDetail'
// import StudentDetail from '../src/containers/Detail/StudentDetail'
// import CourseDetail from '../src/containers/Detail/CourseDetail'
import  Header  from '../src/containers/Header/Header'
import  HihiFooter  from '../src/containers/Footer/Footer'
import Router from './Routes'
// class App extends Component {
//   render(){
//     return (

//     );
//   }
// }
const App = () =>{
  return (
    <div>
    <Header />
      <div className='container content-page'>
        <Router />
      </div>
    <HihiFooter />
  </div>
  )
  }
export default App;
