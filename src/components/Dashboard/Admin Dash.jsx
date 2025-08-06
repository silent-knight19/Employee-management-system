import React from 'react';
import Header from '../other/Header';
import '../../styles/AdminDash.css';
import Alltasks from '../other/Alltasks';

const AdminDash = (props) => {
    return (
        <div className='admin-dashboard-container'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <Alltasks />
        </div>
    )
}

export default AdminDash