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
    const existingEmployeeData = localStorage.getItem('employeeData');
    const existingAdminData = localStorage.getItem('adminData');
    
    if (!existingEmployeeData || !existingAdminData) {
      console.log('Initializing localStorage data...');
      setLocalStorage();
    }
    setIsInitialized(true);
  }, []);

  
  useEffect(() => {
    if (isInitialized) {
      console.log('Employee Data:', authData.employeeData);
      console.log('Admin Data:', authData.adminData);
    }
  }, [authData, isInitialized]);

  const handleLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      try {
        const admin = authData.adminData?.find(admin => 
          admin.email === email && admin.password === password
        );
        
        const employee = authData.employeeData?.find(emp => 
          emp.email === email && emp.password === password
       );

        if (admin) {
          setUser("admin");
          resolve();
        } else if (employee) {
          setUser("employee");
          resolve();
        } else {
          const error = new Error("Invalid email or password");
          console.error("Login failed: Invalid credentials");
          reject(error);
        }
      } catch (error) {
        console.error("Login error:", error);
        reject(error);
      }
    });
  };

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDash />
      ) : (
        <EmployeeDash />
      )}
    </>
  );
};

export default App;
