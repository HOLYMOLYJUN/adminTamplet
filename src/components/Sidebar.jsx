import React, { useState } from 'react'
import { navigationMenu } from '../data/dummyData'
import './Sidebar.css'
import { useSidebarStore } from '../store/useSidebarStore'

import Logo from '../../public/img/main_logo.svg'
import LogoSmall from '../../public/img/small_logo.svg'

import { Menu, DashboardSpeed, PcCheck, UserCircle, Cart, CreditCard, GraphUp, Book, LockSquare, ChatBubbleQuestion, NavArrowDown, NavArrowUp } from 'iconoir-react'

const iconMap = {
  Dashboard: <DashboardSpeed />,
  VM: <PcCheck />,
  Users: <UserCircle />,
  Sales: <Cart />,
  Payment: <CreditCard />,
  Analytics: <GraphUp />,
  VisitorLog: <Book />,
  Permissions: <LockSquare />,
  Inquiries: <ChatBubbleQuestion />,
}

const titleMap = {
  Dashboard: '대시보드',
  VM: 'PC관리',
  Users: '회원관리',
  Sales: '매출관리',
  Payment: '결제관리',
  Analytics: '방문자통계',
  VisitorLog: '방문자로그',
  Permissions: '권한설정',
  Inquiries: '고객문의',
}

const Sidebar = () => {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarStore()
  const [openMenuId, setOpenMenuId] = useState(null)

  const handleMenuClick = (item) => {
    if (!item.subMenu) return;
    setOpenMenuId(openMenuId === item.id ? null : item.id)
  }

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
            <React.Fragment key={item.id}>
              <a
                href={item.subMenu ? undefined : item.path}
                className={`nav-item ${item.isActive ? 'active' : ''}`}
                onClick={item.subMenu ? (e) => { e.preventDefault(); handleMenuClick(item); } : undefined}
                style={item.subMenu ? { cursor: 'pointer' } : {}}
              >
                <span className="nav-icon">
                  {iconMap[item.title] || <DashboardSpeed />}
                </span>
                {!isSidebarCollapsed && (
                  <>
                    <span className="nav-text">{titleMap[item.title] || item.title}</span>
                    {item.subMenu && (
                      <span className="nav-arrow" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                        {openMenuId === item.id ? <NavArrowUp /> : <NavArrowDown />}
                      </span>
                    )}
                    {item.title === '' && (
                      <span className="nav-badge">73</span>
                    )}
                  </>
                )}
              </a>
              {/* 서브메뉴 렌더링 */}
              {!isSidebarCollapsed && item.subMenu && openMenuId === item.id && (
                <div className="nav-sub-list">
                  {item.subMenu.map((sub) => (
                    <a
                      key={sub.subMenuId}
                      href={sub.path}
                      className="nav-sub-item"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar 