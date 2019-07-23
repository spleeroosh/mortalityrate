import React from 'react'
import './pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate, paginationNumber, pageINC, pageDEC, currentPage }) => {
  const pageNumbers = [];
  let maxPages = currentPage + paginationNumber;
  let minPages = currentPage;
  let totalPages = Math.ceil(totalItems/itemsPerPage)

  if(minPages > totalPages - paginationNumber) {
    minPages = totalPages - paginationNumber;
  }

  if(maxPages > totalPages) {
    maxPages = totalPages;
  }

  for(let i = minPages; i <= maxPages; i++) {
    pageNumbers.push(i);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item" >
          <div onClick={() => pageDEC()} className="page-link">&laquo;</div>
        </li>
        {pageNumbers.map((number) => {
          let classNames = "page-item";
          if(currentPage === number) {
            classNames = "page-item active";
          }
          return (
            <li key={number} className={classNames}>
              <div onClick={() => paginate(number)} className="page-link">{number}</div>
            </li>
          )
        })}
        <li className="page-item" >
          <div onClick={() => pageINC()} className="page-link">&raquo;</div>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination


