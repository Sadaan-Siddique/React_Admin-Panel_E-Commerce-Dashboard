import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
export const AuthContext = createContext();

function AuthContextAPI({ children }) {

    const [authorizeStatus, setAuthorizeStatus] = useState('');
    const [role, setRole] = useState('');
    const [toggleTheme, setToggleTheme] = useState(true);
    const [authorize, setAuthorize] = useState(false);
    const [roleAuthentication, setRoleAuthentication] = useState(false);

    const apiUrl = 'http://localhost:5000/api';

    const cookieData_isLoggedIn = read_cookie('isLoggedIn');
    const cookieData_isRoleAuthentication = read_cookie('isRoleAuthentication');

    console.log(roleAuthentication);
    useEffect(() => {
        if (cookieData_isLoggedIn === true) {
            setAuthorize(true);
            if (cookieData_isRoleAuthentication === true) {
                setRoleAuthentication(true);
            } else {
                setRoleAuthentication(false);
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
            roleAuthentication, setRoleAuthentication,
            apiUrl
        }}>
            {children}
        </AuthContext.Provider>
    )



}
export default AuthContextAPI;