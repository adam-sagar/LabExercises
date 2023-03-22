import React from "react";

function HookGreeting(props) {

    const [name, setName] = React.useState('World')

    const changeName = () => {
        name === 'World' ? setName('Adam') : setName('World')
    }

    const buttonText = name === 'World' ? 'Change name' : 'Change back';

    return (
        <div className="HookGreeting componentBox">
            <h1>Hook Greeting</h1>
            <h2>Hello {name}</h2>
            <p>Hello {props.name}</p>
            {/* <button onClick={() => changeName()}>Change Name</button> */}
            <button onClick={() => changeName()}>{buttonText}</button> {/* because changeName function is only one line, it can be included in the button */}
        </div>
    );
}

export default HookGreeting;