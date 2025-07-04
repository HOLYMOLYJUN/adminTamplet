import React from 'react'
import DashboardCard from './DashboardCard'
import Chart from './Chart'
import BrandsTable from './BrandsTable'
import ProductsTable from './ProductsTable'
import {
  dashboardCards,
  orderStatistics,
  monthlyStatistics,
  monthlyVisitorData,
  brandsList,
  topProducts
} from '../data/dummyData'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        {/* 대시보드 카드들 */}
        <div className="dashboard-cards">
          {dashboardCards.map((card) => (
            <DashboardCard
              key={card.id}
              title={card.title}
              value={card.value}
              change={card.change}
              isPositive={card.isPositive}
              subtitle={card.subtitle}
              color={card.color}
            />
          ))}
        </div>

        {/* 차트 섹션 */}
        <div className="charts-section">
          <div className="charts-row">
            <div className="chart-col">
              <Chart
                type="donut"
                data={orderStatistics}
                title="PC 관리"
              />
            </div>
            <div className="chart-col">
              <Chart
                type="bar"
                data={monthlyStatistics}
                title="월간 매출"
              />
            </div>
            <div className="chart-col">
              <Chart
                type="line"
                data={monthlyVisitorData}
                title="월간 방문 / 가입"
              />
            </div>
          </div>
          
        </div>

        {/* 테이블 섹션 */}
        <div className="tables-section">
          <div className="table-col">
            <BrandsTable
              brands={brandsList}
              title="Brands Listing"
            />
          </div>
          <div className="table-col">
            <ProductsTable
              products={topProducts}
              title="Top Selling Products"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 