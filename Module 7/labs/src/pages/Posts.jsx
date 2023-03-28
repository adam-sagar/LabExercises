import React, {useEffect, useState} from "react"

function Posts() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://wizard-world-api.herokuapp.com/Houses')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, []);

    return (
        <div>
            <h1>Harry Potter Houses</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id} className="Posts">
                        <p><b>Name:</b> {post.name}</p>
                        <p><b>House Colours:</b> {post.houseColours}</p>
                        <p><b>Founder:</b> {post.founder}</p>
                        <p><b>Animal:</b> {post.animal}</p>
                        <p><b>Ghost:</b> {post.ghost}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts