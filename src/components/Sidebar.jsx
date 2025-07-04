import React from 'react'
import { navigationMenu } from '../data/dummyData'
import './Sidebar.css'
import { useSidebarStore } from '../store/useSidebarStore'

import Logo from '../../public/img/main_logo.svg'
import LogoSmall from '../../public/img/small_logo.svg'

import { Menu, DashboardSpeed, PcCheck, UserCircle, CreditCard, GraphUp, LockSquare, ChatBubbleQuestion} from 'iconoir-react'

const iconMap = {
  Dashboard: <DashboardSpeed />,
  VM: <PcCheck />,
  Users: <UserCircle />,
  Payment: <CreditCard />,
  Analytics: <GraphUp />,
  Permissions: <LockSquare />,
  Inquiries: <ChatBubbleQuestion />,
}

const titleMap = {
  Dashboard: '대시보드',
  VM: '서비스 관리',
  Users: '회원관리',
  Payment: '결제관리',
  Analytics: '방문자 통계',
  Permissions: '권한 설정',
  Inquiries: '문의 관리',
}

const Sidebar = () => {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarStore()

  return (
    <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          {isSidebarCollapsed ? (
            <img src={LogoSmall} alt="logo" />
          ) : (
            <img src={Logo} alt="logo" />
          )}
        </div>
        {!isSidebarCollapsed && (
        <button className="menu-toggle" onClick={toggleSidebar}>
          <span className="menu-icon">
            <Menu />
          </span>
        </button>
        )}
      </div>
      
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          {navigationMenu.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className={`nav-item ${item.isActive ? 'active' : ''}`}
            >
              <span className="nav-icon">
                {iconMap[item.title] || <DashboardSpeed />}
              </span>
              {!isSidebarCollapsed && (
                <>
                  <span className="nav-text">{titleMap[item.title] || item.title}</span>
                  {item.title === '' && (
                    <span className="nav-badge">73</span>
                  )}
                </>
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar 