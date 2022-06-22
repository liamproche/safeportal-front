import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import './EditAccount.css'

function EditAccount() {
    let { user } = useContext(AuthContext)
    return (
        <div className="EditAccount">
            <h2>This is the edit account component</h2>
            <p>Edit Account form goes here</p>
        </div>
    )
}

export default EditAccount