import React,{useState,useEffect} from "react";
import { getLocalStorage } from "../utils/localStorage";
export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        employeeData: [],
        adminData: []
    });

    useEffect(() => {
        const data = getLocalStorage() || {};
        setAuthState({
            employeeData: data.employeeData || [],
            adminData: data.adminData || []
        });
    }, []);

    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
