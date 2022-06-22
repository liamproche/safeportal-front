import AuthContext from '../../../context/AuthContext'
import { useState, useContext } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Modal, Form, Button } from 'react-bootstrap'
import './Login.css'


function Login() {
    const {loginUser, user, incorrectCredentials} = useContext(AuthContext)
    const [showCreateAccount, setShowCreateAccount] = useState(false)
    const showModal = ()=>{
        setShowCreateAccount(!showCreateAccount)
    }
    return !user ?
        <div className="Login">
            <Form id="login-form" className="rounded p-4 p-sm-3" onSubmit={loginUser}>
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


            {/* BEGIN MODAL*/}
            <Modal className="m" show={showCreateAccount}>
                <Modal.Header id="modal-header-text">Create An Account</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label className="form-label">Username</Form.Label>
                            <Form.Control className="user-input" type="text" placeholder="Select a username" name="username"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-label">Password</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder="Select a password" name="password"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-label">Confirm Password</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder="Confirm your password" name="confirm-password"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-label">Access Code</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder="Please enter your access code" name="accessCode"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showModal}>Close</Button>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
            </Modal>
            <p className="create-account-link" onClick={showModal}>Create an account</p>
        {/* THIS IS THE OVERALL COMPONENT DIV */}
        </div>:
        <Navigate to="/"/>

}

export default Login;