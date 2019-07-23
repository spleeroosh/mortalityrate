import React from 'react';
import './item-list.css';

import Pagination from './../pagination';

const ItemList = ({ data, onClickItem, itemsPerPage, totalItems, paginate, pageINC, pageDEC, paginationNumber, currentPage }) => {
  const listClassName = "list-group-item d-flex justify-content-between align-items-center";

  return (
    <div className="list">
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={totalItems} 
        paginate={paginate} 
        paginationNumber={paginationNumber}
        pageINC={pageINC}
        pageDEC={pageDEC}
        currentPage={currentPage}/>
      <ul className="list-group">
        {data.map((item) => {
          return <li className={listClassName} key={item['id']}
                    onClick={() => onClickItem(item['id'])}>{`${item['countryName']}` }</li>
        })}
      </ul>
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={totalItems} 
        paginate={paginate} 
        paginationNumber={paginationNumber}
        pageINC={pageINC}
        pageDEC={pageDEC}
        currentPage={currentPage}/>
    </div>
    
  );
};

export default ItemList;