import React from 'react';
import './item-list.css';

const ItemList = ({ data, onClickItem }) => {
  const listClassName = "list-group-item d-flex justify-content-between align-items-center";
  return (
    <ul className="list-group">
      {data.map((item) => {
        return <li className={listClassName} key={item['id']}
                   onClick={() => onClickItem(item['id'])}>{`${item['Country Name']}, Uncertainty bounds*: ${item['Uncertainty bounds*']}` }</li>
      })}
    </ul>
  );
};

export default ItemList;