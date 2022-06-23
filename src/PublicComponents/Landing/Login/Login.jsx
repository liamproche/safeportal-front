import AuthContext from '../../../context/AuthContext'
import { useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Modal, Form, Button } from 'react-bootstrap'
import './Login.css'

function Login() {
    const {loginUser, user, incorrectCredentials} = useContext(AuthContext)
    const [showCreateAccount, setShowCreateAccount] = useState(false)
    const [username, setUsername]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [accessCode, setAccessCode] = useState('')
    const [passErr, setPassErr] = useState(null)
    const [usernameErr, setUsernameErr] = useState(null)
    const showModal = ()=>{
        setShowCreateAccount(!showCreateAccount)
    }
    const checkSubmit = (e) =>{
        if(password === confirmPass){
          submitNewUser()
          console.log('user submitted')
        }
        else{
          setPassErr(true)
          console.log('there was a pass err')
        }
      }
    const submitNewUser = async () => { 
        const user = {
          username: username,
          email: email,
          password: password,
        //   accessCode: accessCode
        }
        console.log(user)
        try{
          const response = await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          const parsedResponse = await response.json()
          if(parsedResponse.message === "username is taken"){
            setUsernameErr(true)
          }
          else if(parsedResponse.user){
            return <Navigate to ='/'/>
          }
          else{
            setUsername('')
            setPassword('')
            setConfirmPass('')
          }
        }catch(err){
          console.log(err)
          alert("Please try you request again")
        }
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
                <Modal.Header id="modal-header-text">
                    <h3>Create An Account</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={checkSubmit}>
                        <Form.Group>
                            <Form.Label className="form-label">Username</Form.Label>
                            <Form.Control className="user-input" type="text" placeholder="Select a username" name="username" required onChange={(e)=>{setUsername(e.target.value); setUsernameErr(false)}}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-label">Email</Form.Label>
                            <Form.Control className="user-input" type="email" placeholder="Enter your email" name="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-label">Password</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder="Select a password" name="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-label">Confirm Password</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder="Confirm your password" name="confirmPass" required onChange={(e)=>{setConfirmPass(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-label">Access Code</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder="Please enter your access code" name="accessCode" required onChange={(e)=>{setAccessCode(e.target.value)}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                    <Modal.Footer className="modal-footer">
                        <div className="button-container">
                            <Button variant="secondary" onClick={showModal}>Close</Button>
                            <Button variant="primary" className="submit-button" onClick={checkSubmit}>Submit</Button>
                        </div>
                        <div className="error-container">
                            {usernameErr?
                              <p className="error-message">Username is already taken</p>:
                              <br className="nothing"/>  
                            }
                            {passErr?
                                <p className="error-message">Passwords Must Match</p>:
                                <br className="nothing"/>  
                            }
                        </div>
                </Modal.Footer>
            </Modal>
            <p className="create-account-link" onClick={showModal}>Create an account</p>
        {/* THIS IS THE OVERALL COMPONENT DIV */}
        </div>:
        <Navigate to="/"/>

}

export default Login;