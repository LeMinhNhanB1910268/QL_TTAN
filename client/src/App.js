import React, { Component } from 'react';

import {Routes, Route} from 'react-router-dom'
import './App.scss'
import HomePage from './containers/Home/HomePage'
//import Login from './containers/LoginContainer';
import MemberManager from '../src/containers/system/memberManager'
import StudentManager from './containers/system/studentManager'
import NhomtManager from './containers/system/nhomManager'
import AccountManager from './containers/system/accountManager'
import CourseManager from './containers/system/courseManager'
import LoginContainer from './containers/LoginContainer'
import  Header  from '../src/containers/Header/Header'
import  HihiFooter  from '../src/containers/Footer/Footer'
import DetailMember from '../src/containers/Detail/DetailMember'
class App extends Component {
  render(){
    return (
      <div>
        <Header />
          <div className='container content-page'>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/member' element={<MemberManager />}></Route>
              <Route path='/student' element={<StudentManager />}></Route>
              <Route path='/nhom' element={<NhomtManager />}></Route>
              <Route path='/account' element={<AccountManager />}></Route>
              <Route path='/course' element={<CourseManager />}></Route>
              <Route path='/login' element={<LoginContainer />}></Route>
              <Route path='/member/:id' component={<DetailMember />}></Route>
            </Routes>
          </div>
        <HihiFooter />
      </div>
    );
  }
}

export default App;
