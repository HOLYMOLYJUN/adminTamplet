import React from 'react';
import './Table.css';

/**
 * 범용 Table 컴포넌트
 * @param {string} type - 'user' | 'payment' 등 테이블 타입
 * @param {Array} data - 테이블에 표시할 데이터
 * @param {string} title - 테이블 상단 타이틀
 */
const Table = ({ type, data, title }) => {
  // type별 컬럼 정의
  let columns = [];
  let renderRow = () => null;

  if (type === 'user') {
    columns = ['번호', '아이디', '이메일', 'IP', '가입일'];
    renderRow = (row) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>
          <div className="table-cell-info">
            <div className="table-cell-details">
              <span className="table-cell-main">{row.username}</span>
              <span className="table-cell-sub" style={{ fontSize: '12px', color: '#888' }}>{row.provider} 가입</span>
            </div>
          </div>
        </td>
        <td className="text-primary">{row.email}</td>
        <td className="text-primary">{row.ip}</td>
        <td>{row.joinedAt}</td>
      </tr>
    );
  } else if (type === 'payment') {
    columns = ['번호', '결제자', '결제수단', '금액', '결제일'];
    renderRow = (row) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td>{row.username}</td>
        <td>{row.method}</td>
        <td className="text-primary">{row.amount}</td>
        <td>{row.paidAt}</td>
      </tr>
    );
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <h3 className="table-title">{title}</h3>
        <button className="add-brand-btn">
          <span className="add-icon">+</span>
          Add {type === 'user' ? 'User' : type === 'payment' ? 'Payment' : ''}
        </button>
      </div>
      <div className="table-content">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(renderRow)}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <span className="pagination-info">Showing {data.length} Results</span>
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
  );
};

export default Table; 