import React, { Component } from 'react';

import {Routes, Route} from 'react-router-dom'
import HomePage from './containers/Home/HomePage'
//import Login from './containers/LoginContainer';
import MemberManager from './containers/system/memberManager'
import StudentManager from './containers/system/studentManager'
import NhomtManager from './containers/system/nhomManager'
import AccountManager from './containers/system/accountManager'
import CourseManager from './containers/system/courseManager'
import LoginContainer from './containers/LoginContainer'

class App extends Component {
  render(){
    return (
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/member' element={<MemberManager />}></Route>
          <Route path='/student' element={<StudentManager />}></Route>
          <Route path='/nhom' element={<NhomtManager />}></Route>
          <Route path='/account' element={<AccountManager />}></Route>
          <Route path='/course' element={<CourseManager />}></Route>
          <Route path='/login' element={<LoginContainer />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
