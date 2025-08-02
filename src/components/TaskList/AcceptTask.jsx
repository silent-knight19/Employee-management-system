import React from 'react';
import './AcceptTask.css';

const AcceptTask = ({ data }) => {
  console.log(data);
  
  return (
    <div className="accept-task">
      <div className="task-header">
        <h3 className="priority-badge">{data.priority}</h3>
        <h4 className="due-date">{data.dueDate}</h4>
      </div>
      <h2 className="task-title">{data.title}</h2>
      <p className="task-description">
        {data.description}
      </p>
      <div className="task-actions">
        <button className="complete-btn">Mark as Completed</button>
        <button className="fail-btn">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;