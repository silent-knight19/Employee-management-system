import React from 'react';
import './Header.css'; // Import styles for the header component

/**
 * Header Component
 * 
 * Reusable header component that displays:
 * - Greeting message with user's first name
 * - Logout button to sign out of the application
 * 
 * @param {Object} props - Component props
 * @param {Function} props.changeUser - Function to handle user logout/state update
 * @param {Object} props.data - User data containing profile information
 * @param {string} props.data.firstName - User's first name to display in the greeting
 */
const Header = (props) => {
  /**
   * Handles user logout by:
   * 1. Clearing the logged-in user from localStorage
   * 2. Updating the application state via the changeUser prop
   */
  const logOutUser = () => {
    // Clear the logged-in user from localStorage
    localStorage.setItem('loggedInUser', '');
    // Update the application state to reflect the logout
    props.changeUser('');
  };

  return (
    <header className="header-container">
      {/* User greeting section */}
      <div className="header-greeting">
        <p className="greeting-text">Welcome back,</p>
        {/* Display user's first name or fallback to "User" if not available */}
        <h1 className="header-username">{props.data?.firstName || "User"} 👋</h1>
      </div>
      
      {/* Logout button */}
      <button 
        onClick={logOutUser} 
        className="logout-button"
        aria-label="Log out of the application"
      >
        Log Out
      </button>
    </header>
  );
};

export default Header;
