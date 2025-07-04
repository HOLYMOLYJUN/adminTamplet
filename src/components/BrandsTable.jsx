import React from 'react'
import './BrandsTable.css'

const BrandsTable = ({ brands, title }) => {
  return (
    <div className="brands-table-container">
      <div className="table-header">
        <h3 className="table-title">{title}</h3>
        <button className="add-brand-btn">
          <span className="add-icon">+</span>
          Add Brand
        </button>
      </div>
      
      <div className="table-content">
        <div className="table-info">
          <span className="table-count">{brands.length} Active brands out of 120</span>
        </div>
        
        <div className="table-wrapper">
          <table className="brands-table">
            <thead>
              <tr>
                <th>Brand</th>
                <th>Established</th>
                <th>Stores</th>
                <th>Products</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand.id}>
                  <td>
                    <div className="brand-info">
                      <div className="brand-icon">
                        <span className="icon">{brand.name.charAt(0)}</span>
                      </div>
                      <div className="brand-details">
                        <span className="brand-name">{brand.name}</span>
                        <span className="brand-country">{brand.country}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-secondary">{brand.established}</td>
                  <td className="text-primary">{brand.stores}</td>
                  <td className="text-primary">{brand.products}</td>
                  <td>
                    <span className={`status-badge ${brand.status.toLowerCase()}`}>
                      {brand.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn">
                      <span className="dots">⋮</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="pagination">
          <span className="pagination-info">Showing 5 of 20 Results</span>
          <div className="pagination-controls">
            <button className="pagination-btn">‹</button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn">›</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandsTable 