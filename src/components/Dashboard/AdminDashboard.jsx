import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask';
import './AdminDashboard.css';

const AdminDashboard = (props) => {
    return (
        <div className='admin-dashboard-container'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard