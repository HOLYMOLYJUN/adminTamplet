import React from 'react'
import './Header.css'
import { Search, Menu } from 'iconoir-react'
import { useSidebarStore } from '../store/useSidebarStore'

const Header = () => {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarStore()

  return (
    <header className="header">
      <div className={`header-left ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        {isSidebarCollapsed && (
          <button className="menu-toggle" onClick={toggleSidebar}>
            <span className="menu-icon">
              <Menu />
            </span>
          </button>
        )}
        <h1 className="page-title">Dashboard</h1>
      </div>
      
      <div className="header-center">
      </div>
      
      <div className="header-right">
        <div className="search-bar">
          <button className="search-btn">
            <span className="search-icon">
              <Search />
            </span>
          </button>
          <input 
            type="text" 
            placeholder="Search something..."
            className="search-input"
          />
        </div>
      </div>
    </header>
  )
}

export default Header 