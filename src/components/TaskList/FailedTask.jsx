import React from 'react';
import './FailedTask.css';

const FailedTask = ({data}) => {
  return (
    <div className='failed-task-container'>
            <div className='task-header'>
                <h3 className='task-category'>{data.category}</h3>
                <h4 className='task-date'>{data.taskDate}</h4>
            </div>
            <h2 className='task-title'>{data.taskTitle}</h2>
            <p className='task-description'>
                {data.taskDescription}
            </p>
            <div className='task-actions'>
                <button className='task-button-failed'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask