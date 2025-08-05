import React from "react";
import "./TaskLists.css";
import AcceptTask from "../TaskList/AcceptTask";
const tasks = [
  {
    id: 1,
    title: "Website Development",
    priority: "High",
    dueDate: "30 July 2025",
    description:
      "Develop a responsive company website using React and Tailwind CSS. Include homepage, about, services, and contact sections with a modern UI/UX design.",
  },
  {
    id: 2,
    title: "API Integration",
    priority: "Medium",
    dueDate: "15 August 2025",
    description:
      "Integrate RESTful APIs for user authentication and data management. Ensure secure token handling and proper error management.",
  },
  {
    id: 3,
    title: "Database Design",
    priority: "High",
    dueDate: "5 August 2025",
    description:
      "Design and implement MongoDB schema for the application. Set up relationships between collections and create necessary indexes for performance.",
  },
  {
    id: 4,
    title: "Testing",
    priority: "Medium",
    dueDate: "20 August 2025",
    description:
      "Write unit and integration tests for all components and API endpoints. Achieve at least 85% test coverage.",
  },
  {
    id: 5,
    title: "Deployment",
    priority: "Low",
    dueDate: "25 August 2025",
    description:
      "Set up CI/CD pipeline using GitHub Actions. Deploy the application to Vercel and set up monitoring with Sentry.",
  },
  {
    id: 6,
    title: "Documentation",
    priority: "Low",
    dueDate: "28 August 2025",
    description:
      "Create comprehensive documentation including setup instructions, API documentation, and user guides.",
  },
];

const TasklLists = () => {
  return (
    <>
    <AcceptTask data={tasks}/>
    <div className="tasklists">
      {tasks.map((task) => (
        <div key={task.id}>
          <div className={`tasklist tasklist-${task.priority.toLowerCase()}`}>
            <div className="priority-bar">
              <h3 className="priority-label">
                {task.priority} <br />
                {task.dueDate}
              </h3>
            </div>
            <h4 className="task-title">{task.title}</h4>
            <p className="task-desc">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default TasklLists;
