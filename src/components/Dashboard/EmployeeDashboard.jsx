import React from 'react';
// The Header shows the logged-in employee's name and provides logout functionality
import Header from '../other/Header';
// TaskListNumbers displays a visual summary of tasks by status (new, in-progress, completed, failed)
import TaskListNumbers from '../other/TaskListNumbers';
// TaskList renders the actual list of tasks assigned to the employee
import TaskList from '../TaskList/TaskList';
// Styling specific to the employee dashboard layout
import './EmployeeDashboard.css';

/**
 * EmployeeDashboard - The main workspace for employees to view and manage their tasks
 * 
 * This component serves as the central hub where employees can:
 * - See their profile information and log out
 * - View task statistics at a glance
 * - Interact with their assigned tasks (view details, update status)
 * 
 * The dashboard is composed of three main sections:
 * 1. Header (top): Shows user info and logout button
 * 2. Task Statistics: Visual cards showing counts of tasks by status
 * 3. Task List: Detailed view of all assigned tasks with status indicators
 * 
 * @param {Object} props - Component properties
 * @param {Function} props.changeUser - Callback for handling user logout, passed to Header
 * @param {Object} props.data - Contains employee profile and task information
 * @param {Array} props.data.tasks - Array of task objects assigned to the employee
 * @param {Object} props.data.taskCounts - Summary of tasks by status (new, active, completed, failed)
 */
const EmployeeDashboard = (props) => {
  return (
    <div className='employee-dashboard-container'>
        {/* The header shows the employee's name and includes the logout functionality */}
        <Header changeUser={props.changeUser} data={props.data} />
        
        {/* Displays task statistics in a card layout to give a quick overview */}
        <TaskListNumbers data={props.data} />
        
        {/* Renders the complete list of tasks with their current status and actions */}
        <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;