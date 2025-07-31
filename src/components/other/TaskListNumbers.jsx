import React from "react";

const TaskListNumbers = () => {
  return (
    <>
      <div
        className="tasklists"
        style={{
          display: "flex",
          flexDirection: "row", // row layout
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", // optional: wraps on smaller screens
          padding: "20px",
          gap: "15px", // gap between cards
        }}
      >
        {/* New Task */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#38BDF8",
            borderRadius: "10px",
            border: "1px solid #10B981",
            width: "22%",
            height: "200px", // tweak this for responsiveness
            color: "black",
            padding: "20px",
            gap: "10px",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>0<br/>New Task</h1>
          
          <button
            style={{
              backgroundColor: "#607D8B",
              color: "black",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            View All
          </button>
        </div>

        {/* Completed */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#34D399",
            borderRadius: "10px",
            border: "1px solid #10B981",
            width: "22%",
            height: "200px", // tweak this for responsiveness
            color: "black",
          }}
        >
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
            0<br />
            Completed
          </h1>
          <button style={{ backgroundColor: "#607D8B", color: "black", padding: "5px 10px", borderRadius: "5px" }}>
            View All
          </button>
        </div>

        {/* Accepted */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FBBF24",
            padding: "12px 16px",
            borderRadius: "10px",
            border: "1px solid #10B981",
            width: "22%",
            height: "200px", // tweak this for responsiveness
            color: "black",
          }}
        >
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
            0<br />
            Accepted
          </h1>
          <button style={{ backgroundColor: "#607D8B", color: "black", padding: "5px 10px", borderRadius: "5px" }}>
            View All
          </button>
        </div>

        {/* Failed */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F87171",
            padding: "12px 16px",
            borderRadius: "10px",
            border: "1px solid #10B981",
            width: "22%",
            height: "200px", // tweak this for responsiveness
            color: "black",
          }}
        >
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
            0<br />
            Failed
          </h1>
          <button style={{ backgroundColor: "#607D8B", color: "black", padding: "5px 10px", borderRadius: "5px" }}>
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
