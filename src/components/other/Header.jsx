import React, { useState } from 'react';
import './Header.css';
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='header-container'>
        <h1 className='header-greeting'>Hello <br /> <span className='header-username'>username 👋</span></h1>
        <button onClick={logOutUser} className='logout-button'>Log Out</button>
    </div>
  )
}

export default Header