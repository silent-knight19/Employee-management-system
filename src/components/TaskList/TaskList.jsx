import React from 'react';
import './TaskList.css'; // Import styles for the TaskList component

// Import task type components
import AcceptTask from './AcceptTask';    // For active/accepted tasks
import NewTask from './NewTask';          // For new tasks
import CompleteTask from './CompleteTask'; // For completed tasks
import FailedTask from './FailedTask';     // For failed tasks

/**
 * TaskList Component
 * 
 * Renders a list of tasks based on their status. Each task is displayed
 * using a specific component depending on its current state:
 * - NewTask: For newly assigned tasks
 * - AcceptTask: For active/in-progress tasks
 * - CompleteTask: For successfully completed tasks
 * - FailedTask: For tasks that couldn't be completed
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - User data containing tasks array
 * @param {Array} props.data.tasks - Array of task objects
 */
const TaskList = ({ data }) => {
    return (
        <div id="tasklist" className="tasklist-wrapper" role="list" aria-label="List of tasks">
            {data.tasks.map((task, idx) => {
                // Determine which task component to render based on task status
                let TaskComponent = null;

                // Select the appropriate component based on task status
                if (task.active) {
                    TaskComponent = <AcceptTask data={task} />;
                } else if (task.newTask) {
                    TaskComponent = <NewTask data={task} />;
                } else if (task.completed) {
                    TaskComponent = <CompleteTask data={task} />;
                } else if (task.failed) {
                    TaskComponent = <FailedTask data={task} />;
                }

                // Only render if we have a valid task component
                return TaskComponent ? (
                    <div key={idx} className="task-card" role="listitem">
                        {/* Render the selected task component */}
                        {TaskComponent}
                        
                        {/* Action buttons for task management */}
                        <div className="button-group">
                            <button 
                                className="btn success" 
                                aria-label={`Mark task '${task.taskTitle}' as completed`}
                            >
                                Mark as Completed
                            </button>
                            <button 
                                className="btn failed" 
                                aria-label={`Mark task '${task.taskTitle}' as failed`}
                            >
                                Mark as Failed
                            </button>
                        </div>
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default TaskList;
