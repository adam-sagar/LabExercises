import React, { useState } from "react";

function ToggleEmoji() {

    const emojis = ['😀','😧','🤒','🥴','🤢','🤮','😷']
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        const newIndex = index + 1
        if (newIndex === emojis.length) {
            setIndex(0)
        } else {
            setIndex(newIndex)
        }
}

    return (
        <div>
            <p className="ToggleEmoji">{emojis[index]}</p>
            <br/>
            <button onClick={handleClick}>Toggle</button>
        </div>
    )
}

export default ToggleEmoji