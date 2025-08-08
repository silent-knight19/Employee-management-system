# Employee Management System (EMS)

A modern, responsive web application for managing employees, tasks, and organizational workflows. Built with React.js and Vite, this system provides an intuitive interface for both administrators and employees to manage their work efficiently.

## 🚀 Features

### User Authentication
- Secure login system for different user roles (Admin/Employee)
- Protected routes based on user permissions
- Session management

### Admin Dashboard
- View and manage all employees
- Assign and track tasks
- Monitor task progress and completion
- Generate reports and analytics

### Employee Dashboard
- View assigned tasks
- Update task status
- Submit work for review
- View performance metrics

### Task Management
- Create and assign tasks
- Set priorities and deadlines
- Track task progress
- Comment and collaborate on tasks

## 🛠️ Tech Stack

- **Frontend**: 
  - React.js 18
  - React Router for navigation
  - CSS Modules for styling
  - Context API for state management

- **Build Tool**:
  - Vite 5.2.0

- **Development Tools**:
  - ESLint for code quality
  - React Developer Tools

## 📦 Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ems
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🏗️ Project Structure

```
ems/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── Pages/          # Page components
│   ├── styles/         # Global styles and themes
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
└── vite.config.js      # Vite configuration
```

## 🧪 Testing

To run the linter:
```bash
npm run lint
# or
yarn lint
```




## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Create React App Documentation](https://create-react-app.dev/)

---

<div align="center">
  Made with ❤️ by Sachin
</div>
