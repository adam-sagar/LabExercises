import React, { useState } from "react"
import {Outlet} from "react-router-dom"
import axios from "axios"

function PostsPage() {

    const [id, setID] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const newPosts = (event) => {
        event.preventDefault()
        const newPost = { 'id': id + 1, 'title': title, 'body': body}
        const postServer = `https://jsonplaceholder.typicode.com/posts`

        axios.post(postServer, newPost)
            .then(response => { console.log(response);})
            .catch(error => { console.log(error) });
    }

    return (
        <div>
            <h1>Some random posts I can't read</h1>

            <form>
                <label htmlFor="id">id:</label>
                <input type="text" id="id" onChange={event => setID(event.target.value)}/>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" onChange={event => setTitle(event.target.value)}/>
                <label htmlFor="body">Body:</label>
                <input type="text" id="body" onChange={event => setBody(event.target.value)}/>
                <button onClick={newPosts}>Submit</button>
            </form>

            <Outlet />
        </div>
    )
}

export default PostsPage