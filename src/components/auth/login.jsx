import { useState } from "react";
import "../styles/login.css";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      console.log("Login successful");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <div className="page-container">
      <form className="login-container" onSubmit={handleSubmit}>
        <h1 className="login-heading">Login</h1>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          placeholder="Enter your email"
          className="login-input"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          placeholder="Enter your password"
          className="login-input"
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
