import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { useSidebarStore } from './store/useSidebarStore'
import './styles/App.css'

function App() {
  const { isSidebarCollapsed } = useSidebarStore()

  return (
    <div className="app">
      <Sidebar />
      <div className={`main-content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <Header />
        <Dashboard />
      </div>
    </div>
  )
}

export default App 