import React from "react";


export const UserContext = React.createContext('');


export const UserProvider = ({ children }) => {
    const [username, setUsername] = React.useState('');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
}

