import React, { createContext, useState } from "react";
export const AuthContext = createContext();

function AuthContextAPI({ children }) {

    const [toggleTheme, setToggleTheme] = useState(true);
    console.log(toggleTheme);

    return (
        <AuthContext.Provider value={{
            toggleTheme,
            setToggleTheme
        }}>
            {children}
        </AuthContext.Provider>
    )



}
export default AuthContextAPI;