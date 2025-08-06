import React, { useState } from 'react';
import './Login.css';

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='login-container'>
        <div className='login-card'>
            <h2 className='login-title'>Login to Your Account</h2>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='login-form'
            >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='login-input email-input' type="email" placeholder='Enter your email' 
                />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='login-input' type="password" placeholder='Enter password' />
                <button className='login-button'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login