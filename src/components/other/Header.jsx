import React from 'react';
import './Header.css';

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <header className="header-container">
      <div className="header-greeting">
        <p className="greeting-text">Welcome back,</p>
        <h1 className="header-username">{props.data.firstName} 👋</h1>
      </div>
      <button onClick={logOutUser} className="logout-button">
        Log Out
      </button>
    </header>
  );
};

export default Header;
