import Nav from "../Nav/Nav";
import Resources from "../Resources/Resources";
import { useState, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import AuthContext from "../../context/AuthContext";
import "./Profile.css";

function Profile() {
  //NOTE CHANGE THIS TO THE USERS PROFILE AFTER DECIDING WHERE STATE LIVES AND PASSING PROPS
  const { authTokens, user } = useContext(AuthContext);
  const [profile, setProfile] = useState("");
  const [username, setUsername] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [currentLocation, setCurrentLocation] = useState(" ");
  const [aboutMe, setAboutMe] = useState("");
  const [interests, setInterests] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [image, setImage] = useState(null);
  console.log(user);
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", image);
    formData.append("nickname", username);
    formData.append("pronouns", pronouns);
    formData.append("countryOfOrigin", countryOfOrigin);
    formData.append("currentLocation", currentLocation);
    formData.append("about", aboutMe);
    // formData.append("interests", interests);
    const response = await fetch(
      `http://localhost:3001/profile/${user.user.id}`,
      {
        method: "PUT",
        headers: new Headers({
          Authorization: `Bearer ${authTokens.access}`,
        }),
        body: formData,
      }
    );
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    user.user.Profile = parsedResponse;
    console.log(user);
    setProfile(parsedResponse);
  };
  const handleImageUpload = (e) => {
    let file = e.target.files[0];
    setImage(file);
  };
  return (
    <div className="Profile">
      <Nav />
      <div className="profile-container">
        <Resources />
        <h1>This is the profile form</h1>
        <div className="edit-profile-link-container">
          <p onClick={toggleEditModal}>Edit Profile</p>
        </div>
      </div>
      <Modal className="m" show={showEditModal}>
        <Modal.Header>
          <h3>Edit Profile</h3>
        </Modal.Header>
        <Form
          id="profile-form"
          className="rounded p-4 p-sm-3"
          encType="multipart/form"
          onSubmit={handleFormSubmission}
        >
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          ></input>
          <p>Profile Photo</p>
          <Form.Group className="mb-3">
            <Form.Label className="username-form-label">
              First Name / Nickname
            </Form.Label>
            <Form.Control
              className="user-input"
              type="text"
              placeholder="Enter your name"
              name="username"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="pronouns-form-label">Pronouns</Form.Label>
            <Form.Control
              className="user-input"
              type="text"
              placeholder="Pronouns"
              name="pronouns"
              value={pronouns}
              onChange={(e) => {
                setPronouns(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="country-of-origin-form-label">
              Country of Origin
            </Form.Label>
            <Form.Control
              className="user-input"
              type="text"
              placeholder="Country of origin"
              name="countryOfOrigin"
              value={countryOfOrigin}
              onChange={(e) => {
                setCountryOfOrigin(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="currentLocation-form-label">
              Current Location
            </Form.Label>
            <Form.Control
              className="user-input"
              placeholder="Enter current location"
              type="text"
              name="currentLocation"
              onChange={(e) => {
                setCurrentLocation(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="about-me-form-label">About Me</Form.Label>
            <Form.Control
              className="big-user-input"
              type="text"
              placeholder="Input a snippet about who you are and why you joined SPI virtual community"
              name="aboutMe"
              value={aboutMe}
              onChange={(e) => {
                setAboutMe(e.target.value);
              }}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3">
            <Form.Label className="interests-form-label">Interests</Form.Label>
            <Form.Control
              className="big-user-input"
              type="text"
              placeholder="Input your interests"
              name="interests"
              value={interests}
              onChange={(e) => {
                setInterests(e.target.value);
              }}
            />
          </Form.Group> */}
          <Button variant="secondary" onClick={toggleEditModal}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default Profile;
