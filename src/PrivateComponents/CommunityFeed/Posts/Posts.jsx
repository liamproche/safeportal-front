import IndividualPost from "./IndividualPost/IndividualPost"
import "./Posts.css"

//MAYBE MAKE THE POST API CALLS HERE????

function Posts(){
    return (
        <div className="Posts">
            <h2>This is the Posts compoenet</h2>
            <IndividualPost/>
        </div>
    )}
  
  export default Posts