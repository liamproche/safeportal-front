import { useContext } from "react";
import Landing from "../PublicComponents/Landing/Landing";
import Resources from "./Resources/Resources";
import CommunityFeed from "./CommunityFeed/CommunityFeed";
import Reports from "./Reports/Reports";
import AuthContext from '../context/AuthContext';
import Nav from "./Nav/Nav";


function PrivateComponents() {
  let { user } = useContext(AuthContext)
  return user ?
      <div className="PrivateComponents">
        <Nav/>
        <CommunityFeed/>
      </div>:
      <Landing/>
}

export default PrivateComponents