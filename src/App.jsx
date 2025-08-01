import React, { useEffect } from "react";
import Login from "./components/auth/login";
import EmployeeDash from "./components/Dashboard/EmployeeDash";
import AdminDash from "./components/Dashboard/Admin Dash";

import { setLocalStorage } from "./utils/localStorage";
import { getLocalStorage } from "./utils/localStorage";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);
  console.log(authData.employeeData);
  console.log(authData.adminData);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
    } else if (email === "employee@example.com" && password === "123") {
      setUser("employee");
    } else {
      console.log("Invalid credentials");
    }
  };

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDash /> : <EmployeeDash />}
    </>
  );
};

export default App;
