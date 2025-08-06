import React from 'react';
import './AcceptTask.css';

const AcceptTask = ({data}) => {
    console.log(data);
  return (
    <div className='accept-task-container'>
            <div className='task-header'>
                <h3 className='task-category'>{data.category}</h3>
                <h4 className='task-date'>{data.taskDate}</h4>
            </div>
            <h2 className='task-title'>{data.taskTitle}</h2>
            <p className='task-description'>
                {data.taskDescription}
            </p>
            <div className='task-actions'>
                <button className='task-button button-completed'>Mark as Completed</button>
                <button className='task-button button-failed'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask