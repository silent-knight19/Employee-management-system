import React from 'react';
import './TaskListNumbers.css'; // Import styles for the component

/**
 * TaskListNumbers Component
 * 
 * Displays a dashboard of task statistics in a card layout.
 * Shows counts for different task statuses:
 * - New Tasks
 * - Completed Tasks
 * - Active/Accepted Tasks
 * - Failed Tasks
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - User data containing task counts
 * @param {Object} props.data.taskCounts - Object containing counts for different task statuses
 * @param {number} props.data.taskCounts.newTask - Count of new tasks
 * @param {number} props.data.taskCounts.completed - Count of completed tasks
 * @param {number} props.data.taskCounts.active - Count of active/in-progress tasks
 * @param {number} props.data.taskCounts.failed - Count of failed tasks
 */
const TaskListNumbers = ({ data }) => {
  return (
    <div className="task-list-numbers-container">
      {/* New Tasks Card */}
      <div className="task-count-card card-new-task" role="status" aria-live="polite">
        <h2 className="card-title">{data.taskCounts.newTask}</h2>
        <h3 className="card-subtitle">New Task</h3>
      </div>

      {/* Completed Tasks Card */}
      <div className="task-count-card card-completed-task" role="status" aria-live="polite">
        <h2 className="card-title">{data.taskCounts.completed}</h2>
        <h3 className="card-subtitle">Completed Task</h3>
      </div>

      {/* Active/Accepted Tasks Card */}
      <div className="task-count-card card-accepted-task" role="status" aria-live="polite">
        <h2 className="card-title card-text-black">{data.taskCounts.active}</h2>
        <h3 className="card-subtitle card-text-black">Accepted Task</h3>
      </div>

      {/* Failed Tasks Card */}
      <div className="task-count-card card-failed-task" role="status" aria-live="polite">
        <h2 className="card-title">{data.taskCounts.failed}</h2>
        <h3 className="card-subtitle">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
