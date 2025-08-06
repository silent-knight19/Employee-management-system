import React from 'react';
import './TaskListNumbers.css';

const TaskListNumbers = ({ data }) => {
  return (
    <div className="task-list-numbers-container">
      <div className="task-count-card card-new-task">
        <h2 className="card-title">{data.taskCounts.newTask}</h2>
        <h3 className="card-subtitle">New Task</h3>
      </div>

      <div className="task-count-card card-completed-task">
        <h2 className="card-title">{data.taskCounts.completed}</h2>
        <h3 className="card-subtitle">Completed Task</h3>
      </div>

      <div className="task-count-card card-accepted-task">
        <h2 className="card-title card-text-black">{data.taskCounts.active}</h2>
        <h3 className="card-subtitle card-text-black">Accepted Task</h3>
      </div>

      <div className="task-count-card card-failed-task">
        <h2 className="card-title">{data.taskCounts.failed}</h2>
        <h3 className="card-subtitle">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
