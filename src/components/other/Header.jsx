import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "15vh",
            width: "100%",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
           
          }}
        >
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", marginTop: "7.5px"}}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
            Hello
            <br/>
            <span style={{ fontSize: "35px", fontWeight: "bold", color: "white" }}>
              Sachin👋
            </span>
          </h1>
          </span>
          <button
            style={{
              backgroundColor: "#10B981",
              marginTop: "10px",
              color: "white",
              padding: "5px",
              width: "100px",
              height: "70px",
              fontSize: "20px",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
