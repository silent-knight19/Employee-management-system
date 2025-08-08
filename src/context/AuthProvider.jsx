import React, { createContext, useEffect, useState } from 'react';
// Import utility functions for interacting with browser's localStorage
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

/**
 * Authentication Context
 * 
 * Creates a React Context that will be used to provide authentication state
 * and related functions throughout the application. This context will be
 * consumed by components that need access to user authentication data.
 * 
 * The context value is an array containing:
 * [0] userData - The current user's data (or null if not authenticated)
 * [1] setUserData - Function to update the user's authentication state
 */
export const AuthContext = createContext();

/**
 * AuthProvider Component
 * 
 * A context provider component that wraps the application to make authentication
 * state available to all child components. This component:
 * - Manages the current user's authentication state
 * - Handles initialization of local storage for data persistence
 * - Provides a way to update the authentication state throughout the app
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components that will have access to the auth context
 * @returns {JSX.Element} A context provider wrapping the application
 */
const AuthProvider = ({ children }) => {
    /**
     * State to store the current user's data
     * @type {[Object|null, Function]}
     * @property {Object|null} userData - The current user's data (null if not authenticated)
     * @property {Function} setUserData - Function to update the user data
     */
    const [userData, setUserData] = useState(null);

    /**
     * Effect hook that runs once when the component mounts
     * - Initializes local storage with default data if it doesn't exist
     * - Loads any existing user data from local storage
     */
    useEffect(() => {
        // Initialize local storage with default data structure if not already present
        // This ensures the app has the necessary data structure to work with
        setLocalStorage();
        
        // Retrieve the latest employee data from local storage
        // This data will be used to set the initial authentication state
        const { employees } = getLocalStorage();
        
        // Update the component's state with the retrieved employee data
        // This makes the data available to all child components via context
        setUserData(employees);
    }, []); // Empty dependency array ensures this runs only once on mount

    /**
     * Renders the authentication context provider
     * The provider makes the user data and setter function available to all
     * child components through the use of React's Context API
     */
    return (
        <div className="auth-provider">
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;