import React from 'react';
import './NewTask.css'; // Import styles specific to the NewTask component

/**
 * NewTask Component
 * 
 * Displays a newly assigned task that hasn't been accepted yet.
 * Shows task details and provides an option to accept the task.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - Task data object
 * @param {string} props.data.category - Category of the task (e.g., 'Development', 'Design')
 * @param {string} props.data.taskDate - Due date of the task
 * @param {string} props.data.taskTitle - Title of the task
 * @param {string} props.data.taskDescription - Detailed description of the task
 */
const NewTask = ({ data }) => {
    return (
        <div className='new-task-container' role="article" aria-labelledby="task-title">
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
                    className='task-button-accept' 
                    aria-label={`Accept task: ${data.taskTitle}`}
                >
                    Accept Task
                </button>
            </div>
        </div>
    );
};

export default NewTask;