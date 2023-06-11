import { useContext } from "react";
import { AuthContext } from "../ContextAPI/ContextAPI";

const useAuth = () => {
    return (
        useContext(AuthContext)
    )
}
export default useAuth;