import AuthContext from '../context/AuthContext';
import { useState, useContext } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './Login.css'


function Login() {
    const {loginUser, user, incorrectCredentials} = useContext(AuthContext)
    return !user ?
        <div className="Login">
            <Form id="login-form" className="rounded p-4 p-sm-3" onSubmit={loginUser}>
                <h2 className="form-header" key="login-header">Login</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Username</Form.Label>
                    <Form.Control className="user-input" type="username" placeholder='Enter username' name="username"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control className="user-input" type="password" placeholder='Enter password' name="password"/>
                </Form.Group>
            <div className="error-message-container">
            {incorrectCredentials?
                <p className="error-message">Username or password is incorrect</p>:
                <br className="nothing"/>
                }
            </div>
            <Button className="form-button" varient="primary" type="submit">Login</Button>
          </Form>
        </div>:
        <Navigate to="/"/>

}

export default Login;