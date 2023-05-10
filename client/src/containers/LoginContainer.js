import React, { Component, useEffect,useState } from 'react';
import { useNavigate} from 'react-router-dom';

import { Row, Col, Container} from 'reactstrap';

import { Button, Checkbox, Form, Card, Segment } from 'semantic-ui-react'

import { handleLoginApi } from '../services/accountService';
import './login.css'
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
const LoginContainer =()=> {
    const navigate = useNavigate();
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')
    const [isShowPassword,setisShowPassword] = useState(false)
    const [errMessage,seterrMessage] = useState('')

  const handleOnChangeUsername = (event) => {
    setusername(event.target.value)
  }
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleLogin = async () => {
    seterrMessage('')
    try{
       await handleLoginApi(username,password)
      .then(res=>{
        localStorage.setItem('token', res.data.token);
        navigate('../');
        window.location.reload();
      }).catch(e=>{console.log(e);})
    }catch(e) {
      seterrMessage(e.message)
        // errMessage: 
  
    }
  }
  const handleShowHidenPassword = () => {
    setisShowPassword(!isShowPassword)
  }

    return (
      <div className='form-login'>
        <Container>         
          <Row className='justify-content-center' >
              <Col md="5" >
              <Segment color='green'>  
                <h2 className='text-center'>Đăng nhập</h2>
                <Card className='login-form' fluid>
                  <Card.Content>
                    <Form>
                      <Form.Field>
                        <label>Username</label>
                        <input 
                        placeholder='username' 
                        value={username}
                        onChange={(event)=>{handleOnChangeUsername(event)}}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Password</label>
                        <div className='custom-input-password'>
                          <input  className='input-password'
                          placeholder='password' 
                          type={isShowPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(event)=>{handleOnChangePassword(event)}}
                          />
                          <span onClick={()=>{handleShowHidenPassword()}}>
                            <i className={isShowPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}></i>
                          </span>
                        </div>
                      </Form.Field>
                      <div className='col-12' style={{color: 'red'}}>
                        {errMessage}
                      </div>
                      <Form.Field>
                        <Checkbox label='Tôi không phải là người máy' />
                      </Form.Field>
                      <Button type='submit' onClick={()=>{handleLogin()}}>Đăng nhập</Button>
                    </Form>
                    <hr />
                  </Card.Content>
                </Card>
              </Segment>
              </Col>
          </Row>  
        </Container>
      </div>
    );
  
}

export default LoginContainer;
