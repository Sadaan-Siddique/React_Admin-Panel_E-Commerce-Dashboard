import React, { createContext, useState } from "react";
export const AuthContext = createContext();

function AuthContextAPI({ children }) {

    const [toggleTheme, setToggleTheme] = useState(true);
    const [authorize, setAuthorize] = useState(false);
    const [authorizeStatus, setAuthorizeStatus] = useState('');
    console.log(toggleTheme);
    console.log(authorize);

    const apiUrl = 'http://localhost:5000';

    return (
        <AuthContext.Provider value={{
            toggleTheme, setToggleTheme,
            authorize, setAuthorize,
            authorizeStatus, setAuthorizeStatus,
            apiUrl
        }}>
            {children}
        </AuthContext.Provider>
    )



}
export default AuthContextAPI;