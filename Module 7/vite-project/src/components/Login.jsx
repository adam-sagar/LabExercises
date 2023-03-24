import React from 'react';
import useFormInput from '../hooks/useFormInput';

function Login() {

    const usernameProps = useFormInput('')
    const passwordProps = useFormInput('')

    const [loggedIn, setLoggedIn] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0)

    const handleLogin = (e) => {
        e.preventDefault();
        let username = usernameProps.value
        let password = passwordProps.value

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

        setLoggedIn(isLoggedIn)
    }

    return (
        <div className="Login componentBox">

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? 'Hello' + usernameProps.value : 'Please log in'}</div>

            {!loggedIn && loginAttempts < 5 &&

                <form onSubmit={handleLogin}>
                    <div className="formRow">
                        <label htmlFor="username">Username: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input id="username" {...usernameProps} />
                    </div>
                    <div className="formRow">
                        <label htmlFor="password">Password: </label>
                        {/* every time the input changes, store the latest value into state */}
                        <input type="password" id="password" {...passwordProps} />
                    </div>
                    <div>{errorMessage}</div>
                    <button>Login</button>
                </form>
            }

        </div>
    );
}

export default Login