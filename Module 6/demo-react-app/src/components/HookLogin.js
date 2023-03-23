import React from 'react';
import { Hello } from '../components/Hello';

function HookLogin() {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username + ' ' + password)

        //login successful/true if both values exist and match
        let isLoggedIn = (username && password && username === password)

        if (!loggedIn) {
            let newAttempts = loginAttempts + 1

            if (newAttempts === 5) {
                setErrorMessage('Maximum login attempts exceeded. You are blocked. Sorry not sorry')
            } else {
                setErrorMessage('Unsuccessful login attempt #' + newAttempts + ' of 5')
            }
            setLoginAttempts(newAttempts)
        }
        // if (username !== password) {
        //     setErrorMessage('Username and password do not match')
        //     setLoginAttempts(loginAttempts + 1)
        // }

        setLoggedIn(isLoggedIn)
    }

    const handleInputChange = (event) => {
        const target = event.target;
        console.log(target)

        if (target.name === 'username')
            setUsername(target.value)

        if (target.name === 'password')
            setPassword(target.value)

    }    

    return (
        <div className="Login componentBox">

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? <Hello name={username} /> : 'Please log in'}</div>

            {!loggedIn && loginAttempts < 5 &&

                <form onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="username">Username: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="username" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="formRow">
                        <label htmlFor="email">Email: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {/* add another form field for email address */}

                    <div className="formRow">
                        <label htmlFor="password">Password: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input type="password" id="password" name="password" value={password} onChange={handleInputChange} />
                    </div>
                    <div>{errorMessage}</div>
                    <button>Login</button>
                </form>
            }

        </div>
    );
}

export default HookLogin

//display a useful error message if the login was unsuccessful
//add a counter to record the number of unsuccessful login attempts - hide the form if more than 5


/* add another form field for email address */