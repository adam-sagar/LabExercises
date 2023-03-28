import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom' // import

export default function Post() {

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
                <li className="MorePosts">
                    <p><b>id:</b> {data.id}</p>
                    <p><b>Title:</b> {data.title}</p>
                </li>
            </ul>
        </div>
    )
}
