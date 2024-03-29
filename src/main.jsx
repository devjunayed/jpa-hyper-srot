import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskDataProvider from './providers/TaskDataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskDataProvider>
      <App />
    </TaskDataProvider>
  </React.StrictMode>,
)
