import { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../../context/AuthContext";
import IndividualPost from "./IndividualPost/IndividualPost";
import "./Posts.css";

//COMMENT FETCHES HAPPEN HERE????

function Posts() {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState("");
  const { user, authTokens } = useContext(AuthContext);
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/post", {
        headers: {
          Authorization: `Bearer ${authTokens.acces}`,
        },
      });
      const parsedResponse = await response.json();
      const sortedPosts = parsedResponse.posts.sort((a, b) => b.id - a.id);
      console.log(sortedPosts);
      setPosts(sortedPosts);
    } catch (err) {
      console.log(err);
      //TO-DO ERROR HANDLING
    }
  };
  const submitPost = async (e) => {
    e.preventDefault();
    console.log(user.user.id);
    let post = new FormData();
    post.append("userId", user.user.id);
    post.append("content", postContent);
    post.append("image", image);

    try {
      const response = await fetch("http://localhost:3001/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authTokens.acces}`,
        },
        body: post,
      });
      const parsedResponse = await response.json();
      console.log(parsedResponse);
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
          className="rounded p-4 p-sm-3"
          encType="multipart/form"
          onSubmit={submitPost}
        >
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          ></input>
          <p>Add a Photo</p>
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
        return (
          <IndividualPost key={post.id} post={post} userId={user.user.id} />
        );
      })}
      {/* THIS IS THE OVERALL COMPONENT DIV */}
    </div>
  );
}

export default Posts;
