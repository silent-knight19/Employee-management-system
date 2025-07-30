import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "8vh",
            width: "100%",
            backgroundColor: "#1E1E2F",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #10B981",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", marginTop: "7.5px"}}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
            Hello
            <br/>
            <span style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>
              Sachin👋
            </span>
          </h1>
          </span>
          <button
            style={{
              backgroundColor: "#10B981",
              margin: "10px",
              marginBottom: "10px",
              color: "white",
              padding: "5px",
              borderRadius: "10px",
              width: "70px",
              height: "40px",
              fontSize: "16px",
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
