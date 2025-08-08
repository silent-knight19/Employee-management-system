import React from 'react';
import './AcceptTask.css'; // Import styles specific to the AcceptTask component

/**
 * AcceptTask Component
 * 
 * Displays a task that has been accepted and is currently in progress.
 * Shows task details and provides options to mark the task as completed or failed.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - Task data object
 * @param {string} props.data.category - Category of the task (e.g., 'Development', 'Design')
 * @param {string} props.data.taskDate - Due date of the task
 * @param {string} props.data.taskTitle - Title of the task
 * @param {string} props.data.taskDescription - Detailed description of the task
 */
const AcceptTask = ({ data }) => {
    return (
        <div className='accept-task-container' role="article" aria-labelledby="task-title">
            {/* Task header with category and due date */}
            <div className='task-header'>
                <h3 className='task-category'>{data.category}</h3>
                <h4 className='task-date' aria-label={`Due date: ${data.taskDate}`}>
                    {data.taskDate}
                </h4>
            </div>
            
            {/* Task title and description */}
            <h2 id="task-title" className='task-title'>{data.taskTitle}</h2>
            <p className='task-description' aria-label="Task description">
                {data.taskDescription}
            </p>
            
            {/* Task action buttons */}
            <div className='task-actions'>
                <button 
                    className='task-button button-completed' 
                    aria-label={`Mark '${data.taskTitle}' as completed`}
                >
                    Mark as Completed
                </button>
                <button 
                    className='task-button button-failed' 
                    aria-label={`Mark '${data.taskTitle}' as failed`}
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;