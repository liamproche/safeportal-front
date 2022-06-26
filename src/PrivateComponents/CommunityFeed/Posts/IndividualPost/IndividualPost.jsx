import { Accordion } from "react-bootstrap"
import Comment from "./Comment/Comment"
import './IndividualPost.css'

function IndividualPost(props){
    const formatDate = (dateString) =>{
        let tempDate = [...dateString]
        let day = tempDate.splice(8, 2).join('')
        let month = tempDate.splice(5, 2).join('')
        let year = tempDate.splice(0, 4).join('')
        let newDate = `${month}/${day}/${year}`
        return newDate
      }
    //NOTE-COMMENT API CALLS SHOULD HAPPEN HERE
    return (
        <div className="IndividualPost">
            <Accordion flush className="accordion-container">
                <Accordion.Item eventKey="0" id="accordian-item">
                    <Accordion.Header className="accordion-header">
                        <div className="post-header-container">
                            <img src={process.env.PUBLIC_URL + 'img/no-profile-image.png'} alt="Profile Image" className="post-profile-image"/>
                            <div className="post">
                                <p>Username?</p>
                                <p>Date: {formatDate(props.post.createdAt)}</p>
                                <p>{props.post.content}</p>
                            </div>
                        </div>
                        <div className="post-controls">
                        </div>
                    </Accordion.Header>
                    <Accordion.Body id="accordion-body">
                        <Comment/>
                    </Accordion.Body>
                <div className="controller-container">

            </div>
                </Accordion.Item>
            </Accordion>
        {/* THIS IS THE OVERALL COMPOENET DIV     */}
        </div>
    )}
  
  export default IndividualPost