import React from "react";
import "./TaskListNumbers.css";

const TaskListNumbers = () => {
  return (
    <div className="tasklists">
      {/* New Task */}
      <div className="card new-task">
        <h1 className="card-title">
          0<br />
          New Task
        </h1>
        <button className="card-button">View All</button>
      </div>

      {/* Completed */}
      <div className="card completed">
        <h1 className="card-title">
          0<br />
          Completed
        </h1>
        <button className="card-button">View All</button>
      </div>

      {/* Accepted */}
      <div className="card accepted">
        <h1 className="card-title">
          0<br />
          Accepted
        </h1>
        <button className="card-button">View All</button>
      </div>

      {/* Failed */}
      <div className="card failed">
        <h1 className="card-title">
          0<br />
          Failed
        </h1>
        <button className="card-button">View All</button>
      </div>
    </div>
  );
};

export default TaskListNumbers;
