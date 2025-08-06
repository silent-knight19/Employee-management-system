import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import './CreateTask.css';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })
        setUserData(data)
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className='create-task-container'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='create-task-form'
            >
                <div className='form-left-column'>
                    <div className='input-group'>
                        <h3 className='input-label'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='input-field' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div className='input-group'>
                        <h3 className='input-label'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='input-field' type="date" />
                    </div>
                    <div className='input-group'>
                        <h3 className='input-label'>Asign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='input-field' type="text" placeholder='employee name' />
                    </div>
                    <div className='input-group'>
                        <h3 className='input-label'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='input-field' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='form-right-column'>
                    <h3 className='input-label'>Description</h3>
                    <textarea value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='textarea-field' name="" id=""></textarea>
                    <button className='submit-button'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask