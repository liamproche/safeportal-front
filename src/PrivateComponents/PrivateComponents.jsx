import { useContext } from "react";
import { Route, Navigate, Routes} from 'react-router-dom';
import Landing from "../PublicComponents/Landing/Landing";
import AuthContext from '../context/AuthContext';
import Nav from "./Nav/Nav";

function PrivateComponents() {
  let { user } = useContext(AuthContext)
  return user ?
      <div className="PrivateComponents">
        <Nav/>
      </div>:
      <Landing/>
}

export default PrivateComponents