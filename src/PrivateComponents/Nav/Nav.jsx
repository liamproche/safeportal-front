import { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link, Navigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
    let { user, logoutUser } = useContext(AuthContext)
    const [navigate, setNavigate] = useState(false)
    return (
        <nav className="Nav">
            <p>Profile</p>
            <p>Testimonials</p>
            <p>Direct Message</p>
            <p>Groups</p>
            <p>Report</p>
            <p onClick={logoutUser}>Logout</p>
        </nav>
    )
}

export default Nav;