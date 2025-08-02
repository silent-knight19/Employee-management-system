import { useState } from "react";
import "../styles/login.css";

// This is the login screen where users enter their email and password
const Login = ({ handleLogin }) => {
  // Stores what the user types in the email box
  const [email, setEmail] = useState("");
  // Stores what the user types in the password box
  const [password, setPassword] = useState("");
 
  // This runs when the user clicks the login button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Try to log in with the email and password
      await handleLogin(email, password);
      console.log("Login successful");
      
      // Clear the input fields after login
      setEmail("");
      setPassword("");
    } catch (error) {
      // If login fails, show an error message
      console.error("Login failed:", error);
      // Note: Error handling is done in the parent component
    }
  };

  return (
    <div className="page-container">
      {/* This is the login box */}
      <form className="login-container" onSubmit={handleSubmit}>
        <h1 className="login-heading">Login</h1>

        {/* Where you type your email */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          placeholder="Enter your email"
          className="login-input"
          aria-label="Email address"
        />

        {/* Where you type your password */}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          placeholder="Enter your password"
          className="login-input"
          aria-label="Password"
        />

        {/* Click this to log in */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
