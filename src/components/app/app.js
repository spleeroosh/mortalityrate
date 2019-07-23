import React, { Component } from 'react';
import './app.css';
import readTextFile from './../data/read-text-file';
import uuid from 'uuid';

import ItemList from './../item-list';
import Chart from './../chart';

export default class App extends Component {
  state = {
    data: null,
    selectedItem: null,
    currentPage: 1, 
    itemsPerPage: 12,
    paginationNumber: 10
  }

  componentDidMount() {
    this.getData();
  }

  getSelectedItem = (id) => {
    const { data } = this.state;
    let selectedItem;

    for(let i = 0; i < data.length; i++) {
      console.log(data)
      if(data[i].id === id) {
        selectedItem = data[i];
      }
    }

    this.setState({
      selectedItem
    });
  }

  getData = () => {
    readTextFile()
      .then((data) => {
        this.setState({
          data: this.transformData(data)
        });
      });
  }

  transformData = (data) => {
    let jointISO, newItem, newData;
    let countISO = 0;
    let newItems = [];
    const COLORS = ['#E74C3C', 'white', 'rgb(226, 226, 23)'];
    for (let i = 0; i < data.length; i++) {

      newData = [
        data[i]['2010'],
        data[i]['2011'],
        data[i]['2012'],
        data[i]['2013'],
        data[i]['2014'],
        data[i]['2015'],
        data[i]['2016'],
        data[i]['2017']
      ];

      if(data[i]['ISO Code'] !== jointISO) {

        jointISO = data[i]['ISO Code'];
        
        newItem = {
          labels: ['2010 year', '2011 year', '2012 year', '2013 year', '2014 year', '2015 year', '2016 year', '2017 year'],
          countryName: data[i]['Country Name'],
          ISO: data[i]['ISO Code'],
          id: uuid(),
          datasets: [
            {
              label: `IMR (${data[i]['Uncertainty bounds*']})`,
              data: newData,
              backgroundColor: COLORS[countISO]
            }
          ]
        }
      } else {
        newItem['datasets'].push({
          label: `IMR (${data[i]['Uncertainty bounds*']})`,
          data: newData,
          backgroundColor: COLORS[countISO]
        });
      }
      countISO++
      if(data[i]['Uncertainty bounds*'] === 'Upper') {
        newItems.push(newItem);
        countISO = 0;
      }
    }
    return newItems;
  }

  paginate = (currentPage) => {
    this.setState({
      currentPage
    });
  }

  pageINC = () => {
    this.setState(({currentPage, data, itemsPerPage, paginationNumber}) => {
      if(currentPage < data.length/itemsPerPage){
        return {
          currentPage: currentPage + 1,
          
        }
      }
    })
  }

  pageDEC = () => {
    this.setState(({currentPage}) => {
      if(currentPage > 1) {
        return {
          currentPage: currentPage - 1,
        }
      }
    })
  }

  render() {
    const { data, selectedItem, currentPage, itemsPerPage, paginationNumber } = this.state;
    
    if(!data) {
      return <div>Loading...</div>;
    } 
    
    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <main className="container">
        <section className="jumbotron main-section">
          <ItemList data={currentItems} 
                    onClickItem={this.getSelectedItem} 
                    itemsPerPage={itemsPerPage} 
                    totalItems={data.length} 
                    paginate={this.paginate}
                    paginationNumber={paginationNumber}
                    pageINC={this.pageINC}
                    pageDEC={this.pageDEC}
                    currentPage={currentPage}/>
          <Chart selectedItem={selectedItem}/> 
        </section>
      </main>
    );
  }
    
  };
