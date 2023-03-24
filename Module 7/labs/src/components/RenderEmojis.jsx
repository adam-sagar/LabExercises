import React from "react";
import { moods, MoodContext } from "../context/EmojiContext";

// Updated to use the global context 

function RenderEmojis() {
    
    const {mood, setMood, isHappy} = React.useContext(MoodContext)

    const buttonText = isHappy ? 'Make sad' : 'Make happy';

        function toggleEmoji() {

            if (isHappy) {
                setMood(moods.sad)
            } else {
                setMood(moods.happy);
            }
    }

    return (
        <div className="RenderEmojis componentBox">
            <img src={mood} width="50" height="50" alt="emojis" />
            <br/>
            <button onClick={toggleEmoji}>{buttonText}</button>
        </div>
    )
}
export default RenderEmojis;