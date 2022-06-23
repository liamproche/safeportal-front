import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    let { logoutUser } = useContext(AuthContext)
    return (
        <nav className="Nav">
            <Link to="/">Community Feed</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/testimonials">Testimonials</Link>
            <p>Direct Message</p>
            <p>Report</p>
            <p className="logout-link" onClick={logoutUser}>Logout</p>
        </nav>
    )
}

export default Nav;