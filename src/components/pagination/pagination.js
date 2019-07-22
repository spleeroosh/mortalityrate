import React from 'react'
import './pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <div onClick={() => paginate(number)} className="page-link">{number}</div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination


