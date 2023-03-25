import React from "react";
import ToggleEmoji from "./ToggleEmoji";

function RenderEmojis() {

    const happyEmoji = 'https://em-content.zobj.net/source/noto-emoji-animations/344/grinning-face-with-big-eyes_1f603.gif';
    const sadEmoji = 'https://em-content.zobj.net/source/noto-emoji-animations/344/loudly-crying-face_1f62d.gif';
    
    const [emoji, setEmoji] = React.useState(happyEmoji)

    const buttonText = emoji === happyEmoji ? 'Make sad' : 'Make happy';

        function toggleEmoji() {

            if (emoji === sadEmoji) {
                setEmoji(happyEmoji)
            } else {
                setEmoji(sadEmoji);
            }
    }

    return (
        <div className="RenderEmojis">
            <img src={emoji} width="200" height="200" alt="emojis" />
            <br/>
            <button onClick={toggleEmoji}>{buttonText}</button>
            <ToggleEmoji />
        </div>
        
    )
}
export default RenderEmojis;