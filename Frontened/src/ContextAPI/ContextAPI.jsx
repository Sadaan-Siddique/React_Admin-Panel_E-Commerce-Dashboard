import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
export const AuthContext = createContext();

function AuthContextAPI({ children }) {

    const [authorizeStatus, setAuthorizeStatus] = useState('');
    const [role, setRole] = useState('');
    const [toggleTheme, setToggleTheme] = useState(true);
    const [authorize, setAuthorize] = useState(false);
    const [admin, setAdmin] = useState(false);

    const apiUrl = 'http://localhost:5000/api';

    const cookieData_isLoggedIn = read_cookie('isLoggedIn');
    const cookieData_isAdmin = read_cookie('isAdmin');

    console.log(admin);
    useEffect(() => {
        if (cookieData_isLoggedIn === true) {
            setAuthorize(true);
            if (cookieData_isAdmin === true) {
                setAdmin(true);
            } else {
                setAdmin(false);
            }
        } else {
            setAuthorize(false);
        }
    }, [])
    return (
        <AuthContext.Provider value={{
            authorizeStatus, setAuthorizeStatus,
            role, setRole,
            toggleTheme, setToggleTheme,
            authorize, setAuthorize,
            admin, setAdmin,
            apiUrl
        }}>
            {children}
        </AuthContext.Provider>
    )



}
export default AuthContextAPI;