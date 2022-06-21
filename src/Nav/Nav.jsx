import { useContext } from 'react';
import AuthContext from '../context/AuthContext'
import { Link, Navigate } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <nav className="Nav">
            <h2>This is the nav component</h2>
            <Link to="/login">Login</Link>
            <Link to="/register">Create Account</Link>
        </nav>
    )
}

export default Nav;