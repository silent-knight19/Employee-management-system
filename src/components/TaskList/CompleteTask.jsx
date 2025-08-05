import React from 'react';
import '../../styles/CompleteTask.css';

const CompleteTask = ({ data }) => {
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
        <button className="button button-completed">Completed</button>
      </div>
    </div>
  );
};

export default CompleteTask;
