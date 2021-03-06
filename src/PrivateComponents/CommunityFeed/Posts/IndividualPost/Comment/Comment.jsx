import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../../../../context/AuthContext";
import IndividualComment from "./IndividualComment.jsx/IndividualComment";
import "./Comment.css";

function Comment(props) {
  const { user, authTokens } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([...props?.comments]);
  const handleCommentInput = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };
  console.log(user);
  const submitComment = async (e) => {
    e.preventDefault();
    const commentToSend = {
      content: comment,
      postId: props.post.id,
      userId: user.user.id,
    };
    console.log(commentToSend);
    try {
      const response = await fetch("http://localhost:3001/comment", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        }),
        body: JSON.stringify(commentToSend),
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setComments([...comments, parsedResponse]);
      setComment("");
    } catch (err) {
      console.log(err);
      //TODO- ERROR HANDLING
    }
  };
  return (
    <div className="Comment">
      {props.comments.length === 0 ? (
        <h2>There are no comments</h2>
      ) : (
        comments.map((comment) => {
          return <IndividualComment key={comment.id} comment={comment} />;
        })
      )}
      <Form
        id="comment-form"
        className="rounded p-4 p-sm-3"
        onSubmit={submitComment}
      >
        <Form.Group className="mb-3">
          <Form.Label className="form-label">Add a comment</Form.Label>
          <Form.Control
            className="user-input"
            type="text"
            placeholder="Enter comment"
            value={comment}
            name="comment"
            onChange={handleCommentInput}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Comment;
