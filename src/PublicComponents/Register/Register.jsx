import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './Register.css'

function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [passErr, setPassErr] = useState(null)
    const [usernameAvailable, setUsernameAvailable] = useState(true)
    const usernames = []
    const navigate = useNavigate() 
    const getUsernames = async () =>{
        try{
          const response = await fetch('http://localhost:3001/user')
          const parsedResponse = await response.json()
          parsedResponse.map((user)=>{
            return usernames.push(user.username)
          })
        }catch(err){
          console.log(err)
          alert('Registration is currently unavailable')
          //TODO: ERROR HANDLING?
        }
    }
    const checkUsername = () =>{
        if(usernames.includes(username)){
          setUsernameAvailable(false)
        }
        else{
          setUsernameAvailable(true)
        }
    }
    const checkSubmit = (e) =>{
        e.preventDefault()
        checkUsername()
        if(password === confirmPass && !usernames.includes(username)){
          submitNewUser()
        }
        else if(password !== confirmPass){
          setPassErr(true)
        }
        else if(!usernames.includes(username)){
          setUsernameAvailable(false)
        }
    }
    const submitNewUser = async () => { 
        const user = {
          username: username,
          password: password,
        }
        try{
          const response = await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          })
          const parsedResponse = await response.json()
          if(parsedResponse.user){
            return navigate('/login')
          }
          else{
            setUsername('')
            setPassword('')
          }
        }catch(err){
          console.log(err)
          alert("Please try you request again")
        }
      }
      useEffect(() => {
        if(localStorage.getItem('token') !== null) {
        }
        getUsernames();
      }, []);
    return (
        <div className="Register">
            <div id="register-form-container">
                <Form id="register-form" className="rounded p-4 p-sm-3" onSubmit={checkSubmit}>
                    <h2 className="form-header" key="register-header">Sign Up</h2>
                    <Form.Group className="mb-3">
                        <Form.Label className="login-form-label">Username</Form.Label>
                        <Form.Control className="user-input" type="username" placeholder='Select a username' name="username" required value={username} onChange={(e)=>{setUsername(e.target.value); setUsernameAvailable(true)}}/>
                        <div className="error-message-container">
                            {usernameAvailable?
                                <p className="nothing"></p>:
                                <p id="username-error-message" className="error-message">Username unavailable</p>
                            }
                        </div>
                    </Form.Group>
                    <div className="email-input-container">
                        <Form.Group className="email-input">
                            <Form.Label className="user-input">Email</Form.Label>
                            <Form.Control className="user-input" type="email" placeholder="Enter email address" name="email" minLength={1} onChange={(e)=>setEmail(e.target.value)} required/>
                    </Form.Group>
                    </div>
                    <div className="password-input-container">
                        <Form.Group className="mb-3 pass-input">
                            <Form.Label className="form-label">Password</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder='Enter password' name="password" value={password} onChange={(e)=>{setPassword(e.target.value); setPassErr(false)}} minLength="8" required/>
                        </Form.Group>
                        <Form.Group className="mb-3 pass-input">
                            <Form.Label className="form-label">Confirm Password</Form.Label>
                            <Form.Control className="user-input" type="password" placeholder='Confirm password' name="password-confirm" onChange={(e)=>{setConfirmPass(e.target.value); setPassErr(false)}} required/>
                        </Form.Group>
                    </div>
                    {passErr?
                        <p className="error-message">Passwords Must Match</p>:
                        <p className='nothing'></p>  
                    }
                    <Button className="form-button" varient="primary" type="submit">Create Account</Button>
                    <Link id="login-link" className="nav-link" to="/about" key="create-account-link">Login</Link>
                </Form>
            </div>
        </div>
    );
}

export default Register;