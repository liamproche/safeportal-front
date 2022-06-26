import "./IndividualComment.css"

function IndividualComment(props) {
    return <div className="IndividualComment">
        <h2>{props.comment.content}</h2>
    </div>
}

export default IndividualComment