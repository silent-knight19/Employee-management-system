import React from 'react';
import './CompleteTask.css'; // Import styles specific to the CompleteTask component

/**
 * CompleteTask Component
 * 
 * Displays a task that has been successfully completed.
 * Shows task details and indicates completion status.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - Task data object
 * @param {string} props.data.category - Category of the task (e.g., 'Development', 'Design')
 * @param {string} props.data.taskDate - Due date of the task
 * @param {string} props.data.taskTitle - Title of the task
 * @param {string} props.data.taskDescription - Detailed description of the task
 */
const CompleteTask = ({ data }) => {
    return (
        <div className='complete-task-container' role="article" aria-labelledby="task-title">
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
            
            {/* Completion status indicator */}
            <div className='task-actions'>
                <button 
                    className='task-button-complete' 
                    aria-label={`Task '${data.taskTitle}' is completed`}
                    disabled
                >
                    Complete
                </button>
            </div>
        </div>
    );
};

export default CompleteTask;