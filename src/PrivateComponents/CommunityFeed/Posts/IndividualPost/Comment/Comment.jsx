import IndividualComment from "./IndividualComment.jsx/IndividualComment"
import "./Comment.css"

function Comment(props) {
    return <div className="Comment">
        {props.comments.length === 0?
            <h2>There are no comments</h2>:
            props.comments.map((comment)=>{
                return <IndividualComment key={comment.id} comment={comment}/>
            })}
    </div>
}

export default Comment