import React from "react";

class PropsDisplayer extends React.Component {
    
    render() {
        const stringProps = JSON.stringify(this.props);

        return (
            <div className="componentBox">
                <h1>CHECK OUT MY PROPS OBJECT</h1>
                <h2>{stringProps}</h2>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }
}

export default PropsDisplayer

