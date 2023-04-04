import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function PostsList() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, []);

    return (
        <div>
            <ul>
                {data.map(post => (
                    <li key={post.id} className="Posts">
                        <p><b>Post:</b> {post.id}</p><p><b>Title:</b> {post.title}</p>
                        <Link to={'/moreposts/' + post.id}>Read more...</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostsList