import { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../../context/AuthContext";
import IndividualPost from "./IndividualPost/IndividualPost";
import "./Posts.css";

function Posts() {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");
  const { user, authTokens } = useContext(AuthContext);
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/post", {
        headers: new Headers({
          "Content-Type": "application.json",
          Authorization: `Bearer ${authTokens.access}`,
        }),
      });
      const parsedResponse = await response.json();
      const sortedPosts = parsedResponse.posts.sort((a, b) => b.id - a.id);
      setPosts(sortedPosts);
    } catch (err) {
      console.log(err);
      //TO-DO ERROR HANDLING
    }
  };
  const submitPost = async (e) => {
    let postData = new FormData();
    postData.append("userId", user.id);
    postData.append("content", postContent);
    postData.append("image", image);

    try {
      const response = await fetch("http://localhost:3001/post", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        }),
        body: postData,
      });
      const parsedResponse = await response.json();
    } catch (err) {
      console.log(err);
      //TODO- ERROR HANDLING
    }
  };
  const handleImageUpload = (e) => {
    let file = e.target.files[0];
    setImage(file);
  };
  useEffect(() => getPosts, []);
  return (
    <div className="Posts">
      <div className="post-form-container">
        <img
          className="profile-image"
          src={process.env.PUBLIC_URL + "img/no-profile-image.png"}
          alt="user avatar"
        />
        <Form
          id="post-form"
          encType="multipart/form"
          className="rounded p-4 p-sm-3"
          onSubmit={submitPost}
        >
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          ></input>
          <p>Add a photo</p>
          <Form.Group className="mb-3">
            <Form.Control
              className="user-input"
              id="post-form"
              type="text"
              placeholder="What's on your mind?"
              name="post"
              required
              value={postContent}
              onChange={(e) => {
                setPostContent(e.target.value);
                console.log(postContent);
              }}
            />
          </Form.Group>
          <Button id="post-submit-button" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {posts.map((post) => {
        return <IndividualPost key={post.id} post={post} userId={user.id} />;
      })}
      {/* THIS IS THE OVERALL COMPONENT DIV */}
    </div>
  );
}

export default Posts;
