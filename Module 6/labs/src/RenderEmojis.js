import React from "react";

function RenderEmojis() {

    const happyEmoji = 'https://i.etsystatic.com/21680765/r/il/27b0e9/2835810020/il_fullxfull.2835810020_33ap.jpg';
    const sadEmoji = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQav4Ft_r3MQjCg5bZQYPZev1k1w28gorjAuw&usqp=CAU';
    
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
        <div className="RenderEmojis componentBox">
            <img src={emoji} width="300" height="300" alt="emojis" />
            <br />
            <button onClick={toggleEmoji}>{buttonText}</button>
        </div>
    )
}
export default RenderEmojis;