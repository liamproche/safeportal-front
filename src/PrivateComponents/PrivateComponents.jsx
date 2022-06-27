import { useContext } from "react";
import Landing from "../PublicComponents/Landing/Landing";
import CommunityFeed from "./CommunityFeed/CommunityFeed";
import AuthContext from "../context/AuthContext";
import Nav from "./Nav/Nav";

function PrivateComponents() {
  let { user } = useContext(AuthContext);
  return user ? (
    <div className="PrivateComponents">
      <Nav />
      <CommunityFeed />
    </div>
  ) : (
    <Landing />
  );
}

export default PrivateComponents;
