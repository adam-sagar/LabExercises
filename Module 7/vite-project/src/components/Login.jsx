import React, { useContext } from 'react';
import { UserContext } from '../context/MyUserContext';
import useFormInput from '../hooks/useFormInput';

function Login() {

    const usernameProps = useFormInput('')
    const passwordProps = useFormInput('')
    const { username, setUsername } = useContext(UserContext)

    const [loggedIn, setLoggedIn] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('')
    const [loginAttempts, setLoginAttempts] = React.useState(0)

    const handleLogin = (e) => {
        e.preventDefault();
        let user = usernameProps.value
        let password = passwordProps.value

        console.log(user + ' ' + password)

        //login successful/true if both values exist and match
        let isLoggedIn = (user && password && user === password)

        if (!isLoggedIn) {
            let newAttempts = loginAttempts + 1

            if (newAttempts === 5) {
                setErrorMessage('Maximum login attempts exceeded. You are blocked. Sorry not sorry')
            } else {
                setErrorMessage('Unsuccessful login attempt #' + newAttempts + ' of 5')
            }
            setLoginAttempts(newAttempts)
        } else {
            setUsername(user)
            setErrorMessage('')
        }

        setLoggedIn(isLoggedIn)
    }

    return (
        <div className="Login componentBox">

            {/* if we're logged in, use the Hello component to say hello */}
            <div>{loggedIn ? 'Hello ' + username : 'Please log in'}</div>

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
                    
                    <button>Login</button>
                </form>
            }
            <p>{errorMessage}</p>
        </div>
    );
}

export default Login