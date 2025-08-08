/**
 * Main entry point for the Employee Management System (EMS) React application.
 * This file initializes the React application and sets up the main application structure.
 */

// Import required dependencies
import React from 'react' // React library
import ReactDOM from 'react-dom/client' // React DOM for web rendering
import App from './App.jsx' // Main App component
import AuthProvider from './context/AuthProvider.jsx' // Authentication context provider

/**
 * Create a root element and render the application.
 * The application is wrapped in:
 * 1. React.StrictMode - Helps identify potential problems in the application
 * 2. AuthProvider - Provides authentication context to all child components
 * 3. App - The root component of the application
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
