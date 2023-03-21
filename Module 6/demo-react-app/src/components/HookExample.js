import React from "react";

function HookExample() {

    const [hungry, setHungry] = React.useState(false)
    const [mood, setMood] = React.useState('great')

    const getsHungry = () => {
        setHungry(true);
        setMood('hangry');
    }

    return (
        <div className="Example componentBox">
          <h2>State Hook Example</h2>
  
          <p>Mood: {mood}</p>
          <p>Hungry? {String(hungry)}</p>
  
          <button onClick={() => getsHungry()}>Getting Hungry...</button>
        </div>
    );

}

export default HookExample;