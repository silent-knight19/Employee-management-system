import React from "react";
import "./Header.css";

const Header = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <div className="header-container">
      <div className="header-bar">
        <span className="header-greeting">
          <h1 className="header-title">
            Hello
            <br />
            <span className="header-username">{user.firstName}👋</span>
          </h1>
        </span>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Header;
