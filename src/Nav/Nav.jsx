import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
    let { user, logoutUser } = useContext(AuthContext)
    const [navigate, setNavigate] = useState(false)
    return (
        <nav className="Nav">
            <h2>This is the nav component</h2>
            {!user?
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Create Account</Link>
                </>
                :
                // NOTE - LOGGED IN USER ROUTES GO HERE
                <>
                    <a href="" onClick={()=>{logoutUser(); setNavigate(true)}}>Logout</a>
                    <Link to="/account">Account Settings</Link>
                    {navigate?<Navigate to="/"/>: <br className="nothing"/>}
                </>
            }
        </nav>
    )
}

export default Nav;