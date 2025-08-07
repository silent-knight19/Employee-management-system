import React, { useContext, useEffect, useState } from 'react';
import './Global.css';
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    console.log('Login attempt with:', { email, password });
    console.log('userData:', userData);
    
    // Check for admin login first
    if (email.trim() === 'admin@me.com' && password === '123') {
      console.log('Admin login successful');
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return; // Exit after successful admin login
    }
    
    // Check for employee login if not admin
    if (userData && Array.isArray(userData)) {
      console.log('Checking employee login...');
      const employee = userData.find(e => {
        console.log('Checking employee:', e.email, 'with entered:', email);
        return e.email === email && e.password === password;
      });
      
      if (employee) {
        console.log('Employee login successful:', employee);
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        return; // Exit after successful employee login
      }
    }
    
    // If we get here, login failed
    console.log('Login failed - invalid credentials');
    alert("Invalid Credentials");
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App