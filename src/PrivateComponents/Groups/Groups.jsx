import Nav from "../Nav/Nav"
import Resources from "../Resources/Resources"
import "./Groups.css"

function Groups() {
    return <div className="Groups">
        <Nav/>
        <div className="groups-content">
            <Resources/>
            <h1>This is the Groups component</h1>
        </div>
    </div>
}

export default Groups