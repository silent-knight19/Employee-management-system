import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import './AllTask.css';

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className='all-task-container'>
        <div className='task-header-row'>
            <h2 className='header-title'>Employee Name</h2>
            <h3 className='header-title'>New Task</h3>
            <h5 className='header-title'>Active Task</h5>
            <h5 className='header-title'>Completed</h5>
            <h5 className='header-title'>Failed</h5>
        </div>
        <div className=''>
        {userData.map(function(elem,idx){
            return <div key={idx} className='task-data-row'>
            <h2 className='data-item'>{elem.firstName}</h2>
            <h3 className='data-item data-item-new'>{elem.taskCounts.newTask}</h3>
            <h5 className='data-item data-item-active'>{elem.taskCounts.active}</h5>
            <h5 className='data-item data-item-completed'>{elem.taskCounts.completed}</h5>
            <h5 className='data-item data-item-failed'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask