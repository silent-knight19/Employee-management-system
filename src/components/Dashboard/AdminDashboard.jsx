import React from 'react';
// Header component that shows admin information and provides logout functionality
import Header from '../other/Header';
// CreateTask component provides a form for admins to create and assign new tasks
import CreateTask from '../other/CreateTask';
// AllTask component displays and manages the complete list of tasks in the system
import AllTask from '../other/Alltasks';
// Styling specific to the admin dashboard layout
import './AdminDashboard.css';

/**
 * AdminDashboard - The main control panel for administrators
 * 
 * This component serves as the central interface where administrators can:
 * - View their profile and log out of the system
 * - Create new tasks and assign them to employees
 * - Monitor and manage all tasks across the organization
 * 
 * The dashboard is organized into three main sections:
 * 1. Header (top): Displays admin info and contains the logout button
 * 2. Create Task: A form to create and assign new tasks to employees
 * 3. All Tasks: A comprehensive view of all tasks with filtering and management options
 * 
 * @param {Object} props - Component properties
 * @param {Function} props.changeUser - Callback function that handles user logout
 * @param {Object} props.data - Contains admin profile information (if any)
 * @param {string} props.data.name - Name of the logged-in admin
 * @param {string} props.data.role - Role of the user (should be 'admin')
 */
const AdminDashboard = (props) => {
    return (
        <div className='admin-dashboard-container'>
            {/* Header section with admin name and logout functionality */}
            <Header changeUser={props.changeUser} data={props.data} />
            
            {/* Task creation interface with form for adding new tasks */}
            <CreateTask />
            
            {/* Comprehensive task management interface with search and filter capabilities */}
            <AllTask />
        </div>
    );
};

export default AdminDashboard;