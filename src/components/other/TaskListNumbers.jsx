import React, { useContext } from "react";
import "./TaskListNumbers.css";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumbers = () => {
    const authData = useContext(AuthContext);
  return (
    <div className="tasklists">
      {/* New Task */}
      <div className="card new-task">
        <h1 className="card-title">
          {authData.employeeData[0].taskCounts.newTask}<br />
          New Task
        </h1>
        <button className="card-button">View All</button>
      </div>

      {/* Completed */}
      <div className="card completed">
        <h1 className="card-title">
          {authData.employeeData[0].taskCounts.completed}<br />
          Completed
        </h1>
        <button className="card-button">View All</button>
      </div>

      {/* Accepted */}
      <div className="card accepted">
        <h1 className="card-title">
          {authData.employeeData[0].taskCounts.active}<br />
          Accepted
        </h1>
        <button className="card-button">View All</button>
      </div>

      {/* Failed */}
      <div className="card failed">
        <h1 className="card-title">
          {authData.employeeData[0].taskCounts.failed}<br />
          Failed
        </h1>
        <button className="card-button">View All</button>
      </div>
    </div>
  );
};

export default TaskListNumbers;
