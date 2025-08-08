import React, { useContext, useEffect, useState } from 'react';
// Import authentication components
import Login from './components/auth/Login';
// Import dashboard components
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
// Import authentication context
import { AuthContext } from './context/AuthProvider';

/**
 * App - Root Component
 * 
 * The main application component that serves as the entry point for the application.
 * It manages the global state and routing between different views based on user authentication.
 * 
 * Key Responsibilities:
 * - Manages user authentication state (logged in/out, user role)
 * - Handles user login/logout functionality
 * - Persists user session using localStorage
 * - Renders the appropriate UI based on authentication status
 * - Provides authentication context to child components
 * 
 * @component
 * @returns {JSX.Element} The root application component
 */
const App = () => {
  // State for managing user authentication and data
  const [user, setUser] = useState(null);          // Tracks the current user's role ('admin', 'employee', or null)
  const [loggedInUserData, setLoggedInUserData] = useState(null); // Stores the complete data of the logged-in user
  const [userData, SetUserData] = useContext(AuthContext); // Global user data from AuthContext

  /**
   * Effect Hook: Check for existing user session on component mount
   * 
   * This effect runs once when the component is first rendered and performs the following:
   * 1. Checks for a previously saved user session in localStorage
   * 2. If a session exists, parses the stored user data
   * 3. Updates the application state to reflect the logged-in user
   * 
   * This enables persistent authentication across page refreshes by restoring the user's
   * session from localStorage when they return to the application.
   */
  useEffect(() => {
    // Retrieve the serialized user data from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    // If a user session exists in localStorage, restore it
    if (loggedInUser) {
      // Parse the stored JSON data
      const userData = JSON.parse(loggedInUser);
      
      // Update the authentication state with the stored user data
      setUser(userData.role);
      setLoggedInUserData(userData.data);
      
      // Note: The empty dependency array ensures this effect runs only once on mount
    }
  }, [])

  /**
   * Handles user authentication and login process
   * 
   * This function is responsible for:
   * 1. Validating user credentials against stored data
   * 2. Setting up the appropriate user session
   * 3. Persisting the login state in localStorage
   * 4. Handling both admin and employee authentication flows
   * 
   * @param {string} email - The email address provided by the user
   * @param {string} password - The password provided by the user
   * @returns {void}
   * 
   * @note For demonstration purposes, admin credentials are hardcoded.
   *       In a production environment, this should be replaced with secure authentication.
   */
  const handleLogin = (email, password) => {
    // Trim any accidental whitespace from the email
    const trimmedEmail = email.trim();
    
    // Check for admin login (hardcoded credentials for demo purposes only)
    // WARNING: In a real application, never hardcode credentials in the frontend code
    if (trimmedEmail === 'admin@example.com' && password === '123') {
      // Update the user state to indicate admin access
      setUser('admin');
      
      // Persist the admin session in localStorage
      localStorage.setItem('loggedInUser', JSON.stringify({ 
        role: 'admin',
        timestamp: new Date().toISOString()  // Add timestamp for session tracking
      }));
    } 
    // Check for employee login against the user data from context
    else if (userData && Array.isArray(userData)) {
      // Find an employee with matching credentials
      const employee = userData.find((e) => 
        e.email === trimmedEmail && 
        e.password === password
      );
      
      if (employee) {
        // Update the user state with employee role and data
        setUser('employee');
        setLoggedInUserData(employee);
        
        // Persist the employee session in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify({ 
          role: 'employee',
          data: employee,
          timestamp: new Date().toISOString()  // Add timestamp for session tracking
        }));
      } else {
        // No matching employee found with provided credentials
        alert("Invalid email or password. Please try again.");
      }
    } else {
      // Handle case where userData is not available
      alert("Unable to verify credentials. Please try again later.");
    }
  }

  /**
   * Renders the application UI based on the current authentication state
   * 
   * This conditional rendering pattern implements client-side routing based on the user's
   * authentication status and role. The component tree is dynamically rendered as follows:
   * 
   * 1. If no user is logged in (user is null):
   *    - Renders the Login component with the handleLogin function
   *    
   * 2. If an admin user is logged in (user === 'admin'):
   *    - Renders the AdminDashboard component
   *    - Passes the setUser function to enable logout functionality
   *    
   * 3. If an employee user is logged in (any other authenticated user):
   *    - Renders the EmployeeDashboard component
   *    - Passes the setUser function for logout
   *    - Passes the loggedInUserData for personalized content
   * 
   * @returns {JSX.Element} The appropriate component tree based on auth state
   */
  return (
    <div className="app-container">
      {/* Conditional rendering based on authentication state */}
      {!user ? (
        // Show login form when no user is authenticated
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        // Show admin dashboard for admin users
        <AdminDashboard 
          changeUser={setUser} 
          data={loggedInUserData} 
        />
      ) : (
        // Show employee dashboard for regular users
        <EmployeeDashboard 
          changeUser={setUser} 
          data={loggedInUserData} 
        />
      )}
    </div>
  )
}

export default App