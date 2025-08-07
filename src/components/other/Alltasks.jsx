import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './AllTask.css';

const Alltasks = () => {
    const [userData] = useContext(AuthContext);

    return (
        <div className='all-task-wrapper'>
            <table className='task-table'>
                <thead className='task-table-header'>
                    <tr>
                        <th className='header-cell'>Employee Name</th>
                        <th className='header-cell'>New</th>
                        <th className='header-cell'>Active</th>
                        <th className='header-cell'>Completed</th>
                        <th className='header-cell'>Failed</th>
                    </tr>
                </thead>
                <tbody className='task-table-body'>
                    {userData.map((user) => (
                        <tr key={user.id || user.firstName} className='task-data-row'>
                            <td className='data-cell data-cell-name'>{user.firstName}</td>
                            <td className='data-cell data-cell-new'>{user.taskCounts.newTask}</td>
                            <td className='data-cell data-cell-active'>{user.taskCounts.active}</td>
                            <td className='data-cell data-cell-completed'>{user.taskCounts.completed}</td>
                            <td className='data-cell data-cell-failed'>{user.taskCounts.failed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Alltasks;