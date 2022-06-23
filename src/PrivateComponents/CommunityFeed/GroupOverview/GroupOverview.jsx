import IndividualGroup from "./IndividualGroup/IndividualGroup"
import "./GroupOverview.css"

function GroupOverview(){
    return (
        <div className="GroupOverview">
            <h2>This is the Group Overview component</h2>
            <IndividualGroup/>
        </div>
    )
}
  
  export default GroupOverview