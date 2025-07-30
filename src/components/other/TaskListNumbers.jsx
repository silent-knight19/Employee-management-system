import React from "react";

const TaskListNumbers = () => {
  return (
    <>
      <div className="tasklists">
        <div className="tasklists flex">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px",
              marginTop: "7.5px",
              backgroundColor: "#1E1E2F",
              fontcolor: "#E2E8F0",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #10B981",
              width: "50%",
              background: "#38BDF8",
            }}
          >
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              0<br />
              New Task
            </h1>
            <button style={{ backgroundColor: "#607D8B", color: "white"}}>View All</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px",
              marginTop: "7.5px",
              backgroundColor: "#1E1E2F",
              color: "white",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #10B981",
              width: "50%",
              background: "#34D399",
            }}
          >
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              0<br />
              Completed
            </h1>
            <button style={{ backgroundColor: "#607D8B", color: "white"}}>View All</button>
          </div>
        </div>
        <div className="tasklists flex">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px",
              marginTop: "7.5px",
              backgroundColor: "#1E1E2F",
              color: "white",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #10B981",
              width: "50%",
              background: "#FBBF24",
            }}
          >
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              0<br />
              Accepted
            </h1>
            <button style={{ backgroundColor: "#607D8B", color: "white"}}>View All</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px",
              marginTop: "7.5px",
              backgroundColor: "#1E1E2F",
              color: "white",
              padding: "8px 10px",
              borderRadius: "10px",
              border: "1px solid #10B981",
              width: "50%",
              background: "#F87171",
            }}
          >
            <h1
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              0<br />
              Failed
            </h1>
            <button style={{ backgroundColor: "#607D8B", color: "white"}}   >View All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
