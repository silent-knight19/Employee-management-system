// This is the main component that controls the whole app
import React, { useEffect, useState, useContext } from "react";
import Login from "./components/auth/login";
import EmployeeDash from "./components/Dashboard/EmployeeDash";
import AdminDash from "./components/Dashboard/Admin Dash";
import { setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // Keeps track of who is logged in (admin, employee, or no one)
  const [user, setUser] = useState(null);

  // Tells us if the app is ready to use
  const [isInitialized, setIsInitialized] = useState(false);

  // Gets the list of employees and admins
  const authData = useContext(AuthContext);

  // This runs when the app starts
  useEffect(() => {
    // Start fresh by removing any saved login
    localStorage.removeItem("loggedInUser");

    // Check if we already have employee and admin data saved
    const existingEmployeeData = localStorage.getItem("employeeData");
    const existingAdminData = localStorage.getItem("adminData");

    // If no data exists, create some sample data
    if (!existingEmployeeData || !existingAdminData) {
      console.log("Initializing localStorage data...");
      setLocalStorage();
    }

    // Tell the app we're ready to go
    setIsInitialized(true);
  }, []);

  // This function checks if the login details are correct
  const handleLogin = (email, password) => {
    // Trim any extra spaces from email and password
    email = email.trim();
    password = password.trim();
    
    console.log('Login attempt with:', { email, password });

    // Check if it's an employee trying to log in
    try {
      // Get the list of employees from localStorage
      const storedEmployeeData = JSON.parse(localStorage.getItem("employeeData")) || [];
      console.log('Stored employee data:', storedEmployeeData);
      
      if (!Array.isArray(storedEmployeeData)) {
        console.error('Employee data is not an array:', storedEmployeeData);
        alert("Error: Employee data is not properly formatted");
        return;
      }
      
      // Look for an employee with matching email and password (case-insensitive email)
      const employee = storedEmployeeData.find(
        (e) => e.email.toLowerCase() === email.toLowerCase() && e.password === password
      );
      
      console.log('Found employee:', employee);

      if (employee) {
        // If found, log them in and remember who they are
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ 
            role: "employee", 
            data: employee,
            firstName: employee.firstName  // Make sure firstName is included
          })
        );
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  // Show different screens based on who's logged in
  return (
    <>
      {!user ? (
        // Show login screen if nobody is logged in
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        // Show admin screen for admin users
        <AdminDash />
      ) : user === "employee" ? (
        // Show employee screen for regular employees
        <EmployeeDash />
      ) : (
        // Show error if something went wrong
        <div>Invalid user role</div>
      )}
    </>
  );
};

export default App;
