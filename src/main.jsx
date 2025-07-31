import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../src/index.css"
import Authcontext from './context/Authcontext'
import TaskContext from './context/TaskContext'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
      <TaskContext>
    <App />
    </TaskContext>
    </Authcontext>
  </StrictMode>,
)
