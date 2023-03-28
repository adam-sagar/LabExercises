import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom' // import
import axios from "axios"

function Post() {

    const [data, setData] = useState([]);

    const postParams = useParams() // define
    const postid = postParams.id // use
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+postid)
            .then((response) => response.json())
            .then((json) => setData(json))
    }, [postid]);

    return (
        <div>
            <ul>
                <li className="Posts">
                    <p><b>id:</b> {data.id}</p>
                    <p><b>Body:</b> {data.body}</p>
                </li>
            </ul>
        </div>
    )
}

export default Post
