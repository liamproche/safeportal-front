import { useState, useEffect, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthContext from '../../../context/AuthContext'
import IndividualPost from "./IndividualPost/IndividualPost"
import "./Posts.css"


function Posts(){
    const [postContent, setPostContent] = useState('')
    const [posts, setPosts] = useState([])
    const [image, setImage] = useState('')
    const { user, authTokens } = useContext(AuthContext)
    const getPosts = async ()=>{
        try{
            const response = await fetch('http://localhost:3001/post',{
                headers: new Headers({
                    "Content-Type": "application.json",
                    "Authorization": `Bearer ${authTokens.access}`
                })
            })
            const parsedResponse = await response.json()
            const sortedPosts = parsedResponse.posts.sort((a, b)=>b.id - a.id)
            setPosts(sortedPosts)
        }catch(err){
            console.log(err)
            //TO-DO ERROR HANDLING
        }
    }
    const submitPost = async (e) =>{
        e.preventDefault()
        const post = {
            userId : user.user.id,
            content : postContent,
            image : "this is an url"
        }
        try{
            const response = await fetch('http://localhost:3001/post', {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authTokens.access}`
                }),
                body: JSON.stringify(post)
            })
            const parsedResponse = await response.json()
        }catch(err){
            console.log(err)
            //TODO- ERROR HANDLING
        }
    }
    useEffect(()=>getPosts, [])  
    return (
        <div className="Posts">
            <div className="post-form-container">
                <img className="profile-image" src={process.env.PUBLIC_URL + 'img/no-profile-image.png'} alt="Profile Image"/>
                <Form id="post-form" className="rounded p-4 p-sm-3" onSubmit={submitPost}>
                    <Form.Group className="mb-3">
                        <Form.Control className="user-input" id="post-form" type="text" placeholder="What's on your mind?" name="post" required value={postContent} onChange={(e)=>{setPostContent(e.target.value); console.log(postContent)}}/>
                    </Form.Group>
                    <Button id="post-submit-button" variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
            {posts.map((post)=>{
            return <IndividualPost key={post.id} post={post} userId={user.id}/>})} 
        {/* THIS IS THE OVERALL COMPONENT DIV */}
        </div>
    )}
  
  export default Posts