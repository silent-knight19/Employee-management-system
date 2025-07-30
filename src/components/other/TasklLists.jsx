import React from "react";

const TasklLists = () => {
  return (
    <>
      <div
        className="tasklists"
        style={{
          width: "100%",
          height: "430px",
          color: "#0F172A",
          padding: "10px",
          borderRadius: "10px",
          margin: "10px",
          marginTop: "7.5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          overflow: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        <div>
          <div className="tasklist1">
            <div
              className="priority-bar"
              style={{
                display: "flex",
                shrink: 0,
                height: "300px",
                width: "300px",
                borderRadius: "10px",
                border: "1px solid #10B981",
                backgroundColor: "#B91C1C",
              }}
            >
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "white",
                  padding: "10px",
                  margin: "1px 1px",
                  backgroundColor: "#EF4444",
                  height: "50px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                High
                <br />
                30 July 2025{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasklLists;
