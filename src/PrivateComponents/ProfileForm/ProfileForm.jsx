import Nav from "../Nav/Nav";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import "./ProfileForm.css"

function ProfileForm() {
  const [username, setUsername] = useState('')
  const [pronouns, setPronouns] = useState('')
  const [countryOfOrigin, setCountryOfOrigin] = useState('')
  const [currentLocation, setCurrentLocation] = useState(' ')
  const [aboutMe, setAboutMe] = useState('')
  return (
      <div className="ProfileForm">
        <Nav/>
        <h1>This is the profile form</h1>
        <Form id="profile-form" className="rounded p-4 p-sm-3">
          <input type="file"></input>
          <p>Profile Photo</p>
          <Form.Group className="mb-3">
            <Form.Label className="username-form-label">First Name / Nickname</Form.Label>
            <Form.Control className="user-input" type="username" placeholder='User name' name="username" required value={username} onChange={(e)=>{setUsername(e.target.value); console.log(username)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="pronouns-form-label">Pronouns</Form.Label>
            <Form.Control className="user-input" type="pronouns" placeholder='Pronouns' name="pronouns" value={pronouns} onChange={(e)=>{setPronouns(e.target.value); console.log(pronouns)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="country-of-origin-form-label">Country of Origin</Form.Label>
            <Form.Control className="user-input" type="country-of-origin" placeholder='Country of origin' name="countryOfOrigin" value={countryOfOrigin} onChange={(e)=>{setCountryOfOrigin(e.target.value); console.log(countryOfOrigin)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="currentLocation-form-label">Current Location</Form.Label>
            <Form.Control className="user-input" type="current-location" placeholder='Current location' name="currentLocation" value={currentLocation} onChange={(e)=>{setCurrentLocation(e.target.value); console.log(currentLocation)}}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="about-me-form-label">About Me</Form.Label>
            <Form.Control className="big-user-input" type="about-me" placeholder='Input a snippet about who you are and why you joined SPI virtual community' name="aboutMe" value={aboutMe} onChange={(e)=>{setAboutMe(e.target.value); console.log(aboutMe)}}/>
          </Form.Group>
        </Form>

      </div>
    );
}

export default ProfileForm