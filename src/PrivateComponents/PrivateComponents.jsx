import { useContext } from "react";
import { Route, Navigate, Routes} from 'react-router-dom';
import Landing from "../PublicComponents/Landing/Landing";
import Testimonials from "./Testimonials/Testimonials";
import Messages from "./Messages/Messages";
import Groups from "./Groups/Groups";
import Reports from "./Reports/Reports";
import AuthContext from '../context/AuthContext';
import Nav from "./Nav/Nav";

function PrivateComponents() {
  let { user } = useContext(AuthContext)
  return user ?
      <div className="PrivateComponents">
        <Nav/>
        <Testimonials/>
        <Messages/>
        <Groups/>
        <Reports/>
      </div>:
      <Landing/>
}

export default PrivateComponents