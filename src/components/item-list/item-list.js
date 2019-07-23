import React from 'react';
import './item-list.css';

import Pagination from './../pagination';

const ItemList = ({ data, onClickItem, itemsPerPage, totalItems, paginate }) => {
  const listClassName = "list-group-item d-flex justify-content-between align-items-center";

  return (
    <div className="list">
      <ul className="list-group">
        {data.map((item) => {
          return <li className={listClassName} key={item['id']}
                    onClick={() => onClickItem(item['id'])}>{`${item['countryName']}` }</li>
        })}
      </ul>
      <Pagination itemsPerPage={itemsPerPage} totalItems={132} paginate={paginate}/>
    </div>
    
  );
};

export default ItemList;