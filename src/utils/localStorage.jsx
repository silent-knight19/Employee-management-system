const employeeData = [
  {
    id: "E001",
    email: "john.doe@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve the issue with incorrect password validation.",
        date: "2025-07-30",
        category: "Bug",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update user profile UI",
        description: "Redesign the profile page based on new Figma mockups.",
        date: "2025-07-29",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write unit tests",
        description: "Add coverage for Auth and Task reducers.",
        date: "2025-07-28",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: "E002",
    email: "jane.smith@example.com",
    password: "123",
    tasks: [
      {
        title: "Design dashboard layout",
        description: "Propose layout ideas for the admin dashboard.",
        date: "2025-07-27",
        category: "Design",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Conduct user interviews",
        description: "Schedule interviews with 5 users to collect feedback.",
        date: "2025-07-25",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Create design system",
        description: "Define typography, spacing, and colors.",
        date: "2025-07-29",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix mobile responsiveness",
        description: "Ensure proper layout on iOS Safari.",
        date: "2025-07-28",
        category: "Bug",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: "E003",
    email: "david.lee@example.com",
    password: "123",
    tasks: [
      {
        title: "Build authentication API",
        description: "Implement login and signup using JWT.",
        date: "2025-07-26",
        category: "Backend",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Optimize database queries",
        description: "Refactor MongoDB queries to improve performance.",
        date: "2025-07-27",
        category: "Optimization",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Setup CI/CD",
        description: "Integrate GitHub Actions for deployment.",
        date: "2025-07-29",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: "E004",
    email: "emily.jones@example.com",
    password: "123",
    tasks: [
      {
        title: "Create onboarding flow",
        description: "Design and implement new user onboarding experience.",
        date: "2025-07-24",
        category: "UX",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Translate UI to French",
        description: "Localize the entire app to support French.",
        date: "2025-07-30",
        category: "Localization",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Write help documentation",
        description: "Document usage instructions for end-users.",
        date: "2025-07-28",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "E005",
    email: "michael.brown@example.com",
    password: "123",
    tasks: [
      {
        title: "Create project roadmap",
        description: "Define quarterly goals and milestones.",
        date: "2025-07-23",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Analyze feature usage",
        description: "Generate report using Mixpanel data.",
        date: "2025-07-30",
        category: "Analytics",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix API error codes",
        description:
          "Ensure all failed requests return consistent status codes.",
        date: "2025-07-29",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Prepare team presentation",
        description: "Build slides for Q3 team meeting.",
        date: "2025-07-28",
        category: "Communication",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const adminData = [
  {
    id: "A001",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
 const employeeData= localStorage.setItem("employeeData", JSON.stringify(employeeData));
 const adminData= localStorage.setItem("adminData", JSON.stringify(adminData));
 return {employeeData,adminData};
};
export const getLocalStorage = () => {
  const employeeData = JSON.parse(localStorage.getItem("employeeData"));
  const adminData = JSON.parse(localStorage.getItem("adminData"));
  return {employeeData,adminData};
};
