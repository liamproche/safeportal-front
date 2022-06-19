import { useContext } from 'react';
import AuthContext from '../context/AuthContext'
import './Nav.css'

function Nav() {
    return (
        <div className="Nav">
            <p>Sign Up Link</p>
            <p>Login Link</p>
        </div>
    )
}

export default Nav;