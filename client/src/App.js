import React, { Component } from 'react';

import './App.scss'

import  Header  from '../src/containers/Header/Header'
import  HihiFooter  from '../src/containers/Footer/Footer'
import Router from './Routes'
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
