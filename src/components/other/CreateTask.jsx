import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import './CreateTask.css';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();


        const taskToAdd = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };


        const updatedUserData = userData.map(user => {
            if (assignTo === user.firstName) {

                return {
                    ...user,
                    tasks: [...user.tasks, taskToAdd],
                    taskCounts: {
                        ...user.taskCounts,
                        newTask: user.taskCounts.newTask + 1,
                    },
                };
            }

            return user;
        });


        setUserData(updatedUserData);


        setTaskTitle('');
        setCategory('');
        setAssignTo('');
        setTaskDate('');
        setTaskDescription('');
    };

    return (
        <div className='create-task-container'>
            <form onSubmit={submitHandler} className='create-task-form'>
                <h2 className='form-title'>Create a New Task</h2>


                <div className='input-group'>
                    <label htmlFor='taskTitle' className='input-label'>Task Title</label>
                    <input
                        id='taskTitle'
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className='input-field'
                        type="text"
                        placeholder='e.g., Deploy to production'
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='taskDate' className='input-label'>Due Date</label>
                    <input
                        id='taskDate'
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className='input-field'
                        type="date"
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='assignTo' className='input-label'>Assign To</label>
                    <input
                        id='assignTo'
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        className='input-field'
                        type="text"
                        placeholder='Employee first name'
                        required
                    />
                </div>

                <div className='input-group'>
                    <label htmlFor='category' className='input-label'>Category</label>
                    <input
                        id='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className='input-field'
                        type="text"
                        placeholder='e.g., Development, Design'
                        required
                    />
                </div>

                <div className='input-group description-group'>
                    <label htmlFor='taskDescription' className='input-labeld'>Description</label>
                    <textarea
                        id='taskDescription'
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='textarea-field'
                        placeholder='Provide a detailed description of the task...'
                    />
                </div>
                
                <div className='button-groupd'>
                    <button type='submit' className='submit-button'>Add Task ✨</button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;