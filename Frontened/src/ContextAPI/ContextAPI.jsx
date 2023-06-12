import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
export const AuthContext = createContext();

function AuthContextAPI({ children }) {

    const [toggleTheme, setToggleTheme] = useState(true);
    const [authorizeStatus, setAuthorizeStatus] = useState('');
    const [authorize, setAuthorize] = useState(false);
    console.log(authorize);

    const apiUrl = 'http://localhost:5000';

    const cookieData = read_cookie('isLoggedIn');
    console.log(cookieData);
    
    useEffect(() => {
        if (cookieData === true) {
            setAuthorize(true);
        } else {
            setAuthorize(false);
        }
    }, [])
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