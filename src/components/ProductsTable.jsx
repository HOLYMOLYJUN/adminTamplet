import React from 'react'
import './ProductsTable.css'

const ProductsTable = ({ products, title }) => {
  return (
    <div className="products-table-container">
      <div className="table-header">
        <h3 className="table-title">{title}</h3>
        <div className="table-actions">
          <button className="import-btn">
            <span className="import-icon">📥</span>
            Import
          </button>
          <button className="export-btn">
            <span className="export-icon">📤</span>
            Export
          </button>
        </div>
      </div>
      
      <div className="table-content">
        <div className="table-info">
          <span className="table-count">Showing 5 of 10 Results</span>
        </div>
        
        <div className="table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="product-info">
                      <div className="product-icon">
                        <span className="icon">📦</span>
                      </div>
                      <div className="product-details">
                        <span className="product-name">{product.name}</span>
                        <span className="product-date">{product.date}</span>
                      </div>
                    </div>
                  </td>
                  <td className="price">{product.price}</td>
                  <td className="quantity">{product.quantity}</td>
                  <td className="amount">{product.amount}</td>
                  <td className="date">{product.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="pagination">
          <button className="pagination-btn">‹</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">›</button>
        </div>
      </div>
    </div>
  )
}

export default ProductsTable 