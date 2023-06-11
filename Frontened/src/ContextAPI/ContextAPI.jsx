import React, { createContext, useState } from "react";
export const AuthContext = createContext();

function AuthContextAPI({ children }) {

    const [toggleTheme, setToggleTheme] = useState(true);
    const [authorize, setAuthorize] = useState(false);
    console.log(toggleTheme);
    console.log(authorize);


    return (
        <AuthContext.Provider value={{
            toggleTheme,setToggleTheme,
            authorize,setAuthorize
        }}>
            {children}
        </AuthContext.Provider>
    )



}
export default AuthContextAPI;