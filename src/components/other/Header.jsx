import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-bar">
        <span className="header-greeting">
          <h1 className="header-title">
            Hello
            <br />
            <span className="header-username">Sachin👋</span>
          </h1>
        </span>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Header;
