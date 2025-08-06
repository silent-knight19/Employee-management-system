import React from 'react';
import './TaskList.css';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    return (
        <div id="tasklist" className="tasklist-wrapper">
            {data.tasks.map((task, idx) => {
                let TaskComponent = null;

                if (task.active) TaskComponent = <AcceptTask data={task} />;
                else if (task.newTask) TaskComponent = <NewTask data={task} />;
                else if (task.completed) TaskComponent = <CompleteTask data={task} />;
                else if (task.failed) TaskComponent = <FailedTask data={task} />;

                return TaskComponent ? (
                    <div key={idx} className="task-card">
                        {TaskComponent}
                        <div className="button-group">
                            <button className="btn success">Mark as Completed</button>
                            <button className="btn failed">Mark as Failed</button>
                        </div>
                    </div>
                ) : null;
            })}
        </div>
    );
};

export default TaskList;
