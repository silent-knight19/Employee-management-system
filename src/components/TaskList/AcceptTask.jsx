import React from 'react';
import './AcceptTask.css';

const AcceptTask = ({ data }) => {
  return (
    <div className="tasklist">
      <div className="priority-bar">
        <h3 className="priority-label">
          {data.priority || 'High'} <br />
          {data.taskDate || 'Due Soon'}
        </h3>
      </div>
      <h4 className="task-title">{data.taskTitle}</h4>
      <p className="task-desc">{data.taskDescription}</p>
      <div className="task-actions">
        <button className="button button-accept">Accept</button>
      </div>
    </div>
  );
};

export default AcceptTask;
