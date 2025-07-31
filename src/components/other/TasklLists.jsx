import React from "react";
import "./TaskLists.css";

const TasklLists = () => {
  return (
    <div className="tasklists">
      {[1, 2, 3, 4].map((index) => (
        <div key={index}>
          <div className={`tasklist tasklist${index}`}>
            <div className="priority-bar">
              <h3 className="priority-label">
                High <br />
                30 July 2025
              </h3>
            </div>
            <p className="task-desc">
              Create a website for the company using React, Tailwind CSS and
              Vite. The website should have a homepage with a navigation menu, a
              login and register page, and a dashboard page. The website should
              be responsive and have a dark mode. The website should have a
              search bar and a button to add a new task. The task list should be
              displayed in a grid and should have a title, description, date,
              and priority. The user should be able to add, edit and delete
              tasks.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasklLists;
