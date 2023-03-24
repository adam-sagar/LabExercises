import React, {useContext} from "react";
import { MoodContext } from "../context/EmojiContext";

function Clock() {

    const [time, setTime] = React.useState();
    // 3. In one or more of the children, use the useContext hook to get the data from 2
    const {mood} = useContext(MoodContext)

    function tick() {
        const now = new Date();
        setTime(now.toLocaleTimeString())
    }

    setInterval(tick, 1000)

    // add the context to what will be rendered
    return (
        <div className="componentBox">
            {time}
            <img src={mood}/>
        </div>
    ) 
}

export default Clock;