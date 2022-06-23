import Nav from "../Nav/Nav";
import { useState, useContext } from "react";
import { Modal, Form, Button } from 'react-bootstrap'
import AuthContext from "../../context/AuthContext";
import "./Profile.css"

function Profile() {
  const [username, setUsername] = useState('')
  const [pronouns, setPronouns] = useState('')
  const [countryOfOrigin, setCountryOfOrigin] = useState('')
  const [currentLocation, setCurrentLocation] = useState(' ')
  const [aboutMe, setAboutMe] = useState('')
  const [interests, setInterests] = useState('')
  const [showEditModal, setShowEditModal] = useState(false)
  const [image, setImage] = useState(null)
  const { user } = useContext(AuthContext)
  const toggleEditModal = () =>{
    setShowEditModal(!showEditModal)
  }
  const handleFormSubmission = async (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("avatar", image)
    formData.append("nickname", username)
    formData.append("pronouns", pronouns)
    //NOTE CHANGE BELOW WHEN ADDITIONAL COUNTRY FIELD IS KNOWN
    formData.append("countryOfOrigin", countryOfOrigin)
    formData.append("country", currentLocation)
    formData.append("about", aboutMe)
    formData.append("interests", interests)
    formData.append('userId', user.id)
    const response = await fetch("http://localhost:3001/profiles")
    
  }
  const handleImageUpload = (e) =>{
    let file = e.target.files[0]
    console.log(file)
    setImage(file)
  }
  return (
      <div className="Profile">
        <Nav/>
        <h1>This is the profile form</h1>
        <p onClick={toggleEditModal}>Edit Profile</p>
        <Modal className="m" show={showEditModal}>
        <Modal.Header>
          <h3>Edit Profile</h3>
        </Modal.Header>
        <Form id="profile-form" className="rounded p-4 p-sm-3">
          <input type="file" name="image" accept="image/*" onChange={handleImageUpload}></input>
          <p>Profile Photo</p>
          <Form.Group className="mb-3">
            <Form.Label className="username-form-label">First Name / Nickname</Form.Label>
            <Form.Control className="user-input" type="text" placeholder='User name' name="username" required value={username} onChange={(e)=>{setUsername(e.target.value); console.log(username)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="pronouns-form-label">Pronouns</Form.Label>
            <Form.Control className="user-input" type="text" placeholder='Pronouns' name="pronouns" value={pronouns} onChange={(e)=>{setPronouns(e.target.value); console.log(pronouns)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="country-of-origin-form-label">Country of Origin</Form.Label>
            <Form.Control className="user-input" type="text" placeholder='Country of origin' name="countryOfOrigin" value={countryOfOrigin} onChange={(e)=>{setCountryOfOrigin(e.target.value); console.log(countryOfOrigin)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="currentLocation-form-label">Current Location</Form.Label>
            <Form.Control className="user-input" placeholder="Enter current location" type="text" name="currentLocation" onChange={(e)=>{setCurrentLocation(e.target.value); console.log(currentLocation)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="about-me-form-label">About Me</Form.Label>
            <Form.Control className="big-user-input" type="text" placeholder='Input a snippet about who you are and why you joined SPI virtual community' name="aboutMe" value={aboutMe} onChange={(e)=>{setAboutMe(e.target.value); console.log(aboutMe)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="interests-form-label">Interests</Form.Label>
            <Form.Control className="big-user-input" type="text" placeholder='Input your interests' name="interests" value={interests} onChange={(e)=>{setInterests(e.target.value); console.log(interests)}}/>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <div className="button-container">
            <Button variant="secondary" onClick={toggleEditModal}>Close</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </div>
        </Modal.Footer>
      </Modal>
      </div>
    );
}

export default Profile