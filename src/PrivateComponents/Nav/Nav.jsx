import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    let { logoutUser } = useContext(AuthContext)
    return (
        <nav className="Nav">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <p>Testimonials</p>
            <p>Direct Message</p>
            <p>Groups</p>
            <p>Report</p>
            <p onClick={logoutUser}>Logout</p>
        </nav>
    )
}

export default Nav;