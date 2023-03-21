import React from "react";

class Greeting extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            name: "World"
        };
    }

    changeName() {
        this.setState({name: this.props.name})
    }

    render() {
        return (
            <div className="Greeting componentBox">
                <h1>Greeting</h1>
                <h2>Hello {this.state.name}</h2>
                <p>Hello {this.props.name}</p>
                <button onClick={() => this.changeName()}>Change Name</button>
            </div>
        )
    }
}

export default Greeting;