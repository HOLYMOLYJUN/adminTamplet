import React from 'react'
import './DashboardCard.css'

const DashboardCard = ({ title, value, change, isPositive, subtitle, color }) => {
  return (
    <div className={`dashboard-card ${color}`}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <button className="card-menu">
          <span className="dots"></span>
        </button>
      </div>
      
      <div className="card-content">
        <div className="card-value">{value}</div>
        
        <div className="card-stats">
          <span className={`change-indicator ${isPositive ? 'positive' : 'negative'}`}>
            {change}
          </span>
          <span className="card-subtitle">{subtitle}</span>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard 