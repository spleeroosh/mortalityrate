import React from 'react';
import keys from './../../utils/keys';

import './details.css';

const Details = ({ selectedItem }) => {
  const listClassName = "list-group-item d-flex justify-content-between align-items-center";
    const { 2010: year2010,
            2011: year2011,
            2012: year2012,
            2013: year2013,
            2014: year2014,
            2015: year2015,
            2016: year2016,
            2017: year2017,
            ISO,
            name,
            bounds
          } = keys;

  if(selectedItem) {
    return (
      <div className="card text-white bg-primary mb-3" style={{maxWidth: 20 + 'rem'}}>
        <div className="card-header">Country: {selectedItem[name]}</div>
        <div className="card-body">
          <ul className="list-group">
            <li className={listClassName}>{`${ISO}: ${selectedItem[ISO]}`}</li>
            <li className={listClassName}>{`${bounds}: ${selectedItem[bounds]}`}</li>
            <li className={listClassName}>{`${year2010}: ${selectedItem[year2010]}`}</li>
            <li className={listClassName}>{`${year2011}: ${selectedItem[year2011]}`}</li>
            <li className={listClassName}>{`${year2012}: ${selectedItem[year2012]}`}</li>
            <li className={listClassName}>{`${year2013}: ${selectedItem[year2013]}`}</li>
            <li className={listClassName}>{`${year2014}: ${selectedItem[year2014]}`}</li>
            <li className={listClassName}>{`${year2015}: ${selectedItem[year2015]}`}</li>
            <li className={listClassName}>{`${year2016}: ${selectedItem[year2016]}`}</li>
            <li className={listClassName}>{`${year2017}: ${selectedItem[year2017]}`}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>Select country please!</div>
  }
  
};

export default Details;