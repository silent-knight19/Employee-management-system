import React from "react";
import "../styles/login.css";

const Login = () => {
    return (    
       <>
       <div style={{backgroundColor: "#EAECEF", height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
       <div className="login-container">
        <h1>Login</h1>
        <input style={{width: "80%",height: "40px", padding: "10px", margin: "10px 0"}} type="email" placeholder="Enter your email" />
        <input style={{width: "80%",height: "40px", padding: "10px", margin: "10px 0"}} type="password" placeholder="Enter your password" />
        <button style={{width: "20%",height: "50px", padding: "10px", margin: "10px 0"}} type="submit">Login</button>
       </div>
       </div>
       </>      
    );
};
export default Login;
