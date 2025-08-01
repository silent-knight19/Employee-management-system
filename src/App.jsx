import React, { useEffect, useState, useContext } from "react";
import Login from "./components/auth/login";
import EmployeeDash from "./components/Dashboard/EmployeeDash";
import AdminDash from "./components/Dashboard/Admin Dash";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const authData = useContext(AuthContext);

  useEffect(() => {
    // Clear any existing login state
    localStorage.removeItem("loggedInUser");
    
    // Initialize localStorage data if not present
    const existingEmployeeData = localStorage.getItem("employeeData");
    const existingAdminData = localStorage.getItem("adminData");

    if (!existingEmployeeData || !existingAdminData) {
      console.log("Initializing localStorage data...");
      setLocalStorage();
    }
    
    setIsInitialized(true);
  }, []);

  const handleLogin = (email, password) => {
    // Admin login
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    // Employee login
    try {
      const storedEmployeeData =
        JSON.parse(localStorage.getItem("employeeData")) || [];
      const employee = storedEmployeeData.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDash />
      ) : user === "employee" ? (
        <EmployeeDash />
      ) : (
        <div>Invalid user role</div>
      )}
    </>
  );
};

export default App;
