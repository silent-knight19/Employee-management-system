import { useState } from "react";
import "../styles/login.css";

const Login = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const handleSubmit = (e) => {
    console.log("Login");
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#EAECEF",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="login-container">
          <h1>Login</h1>
          <input
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "80%",
              height: "40px",
              padding: "10px",
              margin: "10px 0",
            }}
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "80%",
              height: "40px",
              padding: "10px",
              margin: "10px 0",
            }}
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleSubmit}
                style={{
              width: "20%",
              height: "50px",
              padding: "10px",
              margin: "10px 0",
            }}
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
