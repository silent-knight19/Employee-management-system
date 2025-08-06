import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TasklLists from '../TaskList/TasklLists';
import '../../styles/EmployeeDash.css';

const EmployeeDash = (props) => {

  return (
    <div className='employee-dashboard-container'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TasklListsNumbers data={props.data} />
        <TasklLists data={props.data} />
    </div>
  )
}

export default EmployeeDash