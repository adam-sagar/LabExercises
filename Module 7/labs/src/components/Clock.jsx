import React from "react";

function Clock() {

    const [time, setTime] = React.useState();

    function tick() {
        const now = new Date();
        setTime(now.toLocaleTimeString())
    }

    setInterval(tick, 1000)

    return (
        <div className="componentBox">
            {time}
        </div>
    ) 
}

export default Clock;