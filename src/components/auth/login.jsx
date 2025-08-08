import React, { useState } from 'react';
// Importing styles for the login form component
import './Login.css';

/**
 * Login Component
 * 
 * A secure authentication form that validates user credentials and manages login state.
 * This component handles the UI for user authentication and delegates the actual
 * authentication logic to its parent component via the handleLogin callback.
 * 
 * Key Features:
 * - Email and password validation
 * - Form submission handling with proper error prevention
 * - Accessible form controls with proper ARIA attributes
 * - Responsive design for various screen sizes
 * 
 * @param {Object} props - Component properties
 * @param {Function} props.handleLogin - Callback function that receives user credentials
 * @param {string} props.handleLogin.email - The email entered by the user
 * @param {string} props.handleLogin.password - The password entered by the user
 * @returns {JSX.Element} A form element with email and password fields
 */
const Login = ({ handleLogin }) => {
  // State management for form inputs
  const [email, setEmail] = useState('');        // Stores the email input value
  const [password, setPassword] = useState('');  // Stores the password input value

  /**
   * Handles the form submission event
   * - Prevents the default form submission behavior
   * - Calls the parent's handleLogin function with current credentials
   * - Resets the form fields after submission
   * 
   * @param {React.FormEvent} e - The form submission event
   */
  const submitHandler = (e) => {
    e.preventDefault();
    // Delegate authentication to parent component
    handleLogin(email, password);
    // Clear sensitive data from component state
    setEmail('');
    setPassword('');
  };

  return (
    <div className="page-container" role="main">
      {/* Main login form with accessibility attributes */}
      <form 
        onSubmit={submitHandler} 
        className="login-form-container" 
        aria-label="Employee Management System Login"
      >
        {/* Form header section with welcome message */}
        <h1 className="login-heading">Welcome Back</h1>
        <p className="login-subheading">Please enter your credentials to access the system</p>

        {/* Email input group with proper labeling and validation */}
        <div className="form-group" role="group" aria-labelledby="email-label">
          <label id="email-label" htmlFor="email">
            Email Address
            <span className="required-indicator" aria-hidden="true"> *</span>
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            aria-required="true"
            autoComplete="username"
          />
        </div>

        {/* Password Input Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-required="true"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="login-button" aria-label="Log in to your account">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;