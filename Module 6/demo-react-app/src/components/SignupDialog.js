//code taken from https://reactjs.org/docs/composition-vs-inheritance.html, see there for more detail

import React from 'react'
import FancyBorder from './FancyBorder';

function Dialog(props) {
    return (
      <FancyBorder color="red">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children} {/* everything in between the opening <Dialog> and closing </Dialog> tags on lines 34-36 */}
      </FancyBorder>
    );
}
  
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        //this.handleChange = this.handleChange.bind(this); //since these are arrow functions no need to bind
        //this.handleSignUp = this.handleSignUp.bind(this); //since these are arrow functions no need to bind
        this.state = {login: ''};
    }
  
    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login} onChange={this.handleChange} /> {/* these are 'children' of the Dialog component */}

                <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        );
    }
  
    //arrow functions don't have their own context/this so will inherit the parent one
    handleChange = (e) => {
        this.setState({login: e.target.value});
    }
  
    handleSignUp = () => {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

export default SignUpDialog;

//change SignupDialog to a functional component using hooks
//add support to FancyBorder for another colour or style
//extract FancyBorder to its own file and use it to wrap around and style another component
//create another composition component (similar to FancyBorder) that uses children and renders the wrapped component with a background image