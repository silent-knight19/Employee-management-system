import React, { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// This helps share user login info across the app
export const AuthContext = React.createContext();

// This component manages who is logged in
const AuthProvider = ({ children }) => {
    // Keeps track of all employees and admins
    const [authState, setAuthState] = useState({
        employeeData: [],  // Array to store employee data
        adminData: []     // Array to store admin data
    });

    // Load saved login info when the app starts
    useEffect(() => {
        setLocalStorage();
        // Get saved employee and admin data
        const data = getLocalStorage() || {};
        
        // Save the data for the app to use
        setAuthState({
            employeeData: data.employeeData || [],  // Ensure we always have an array
            adminData: data.adminData || []        // Ensure we always have an array
        });
    }, []);

    // Make the data available to all parts of the app
    return (
        <AuthContext.Provider value={authState}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
