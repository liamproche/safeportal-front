import './IndividualPost.css'

function IndividualPost(props){
    return (
        <div className="IndividualPost">
            <p>Username?</p>
            <p>Date</p>
            <p>{props.content}</p>
            <div className="controller-container">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
                <button>Send</button>
            </div>

        {/* THIS IS THE OVERALL COMPOENET DIV     */}
        </div>
    )}
  
  export default IndividualPost