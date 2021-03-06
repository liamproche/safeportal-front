import { Accordion } from "react-bootstrap";
import Comment from "./Comment/Comment";
import "./IndividualPost.css";

function IndividualPost(props) {
  const formatDate = (dateString) => {
    let tempDate = [...dateString];
    let day = tempDate.splice(8, 2).join("");
    let month = tempDate.splice(5, 2).join("");
    let year = tempDate.splice(0, 4).join("");
    let newDate = `${month}/${day}/${year}`;
    return newDate;
  };
  return (
    <div className="IndividualPost">
      <Accordion flush className="accordion-container">
        <Accordion.Item eventKey="0" id="accordian-item">
          <Accordion.Header className="accordion-header">
            <div className="post-header-container">
              <img
                src={process.env.PUBLIC_URL + "img/no-profile-image.png"}
                alt="user's avatar"
                className="post-profile-image"
              />
              <div className="post">
                {/* NOTE-TO GET THIS UPDATE CONTEXT TO HOLD FULL USER OBJECT INSTEAD OF JUST ID */}
                <p>{props.post.userId}</p>
                <p>Date: {formatDate(props.post.createdAt)}</p>
                <p>{props.post.content}</p>
              </div>
            </div>
            <div className="post-controls"></div>
          </Accordion.Header>
          <Accordion.Body id="accordion-body">
            <Comment comments={props.post.Comments} post={props.post} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* THIS IS THE OVERALL COMPOENET DIV     */}
    </div>
  );
}

export default IndividualPost;
