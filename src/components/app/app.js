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
    itemsPerPage: 12
  }

  componentDidMount() {
    this.getData();
  }

  getSelectedItem = (id) => {
    let selectedItem;
    this.state.data.map((item) => {
      if(item['id'] === id) {
        selectedItem = item;
        return selectedItem;
      }
    });
    this.setState({
      selectedItem
    });
  }

  getData = () => {
    readTextFile()
      .then((data) => {
        const newData = data.map((item) => {
          return {
            ...item,
            id: uuid()
          };
        });
        this.setState({
          data: newData
        });
      });
  }

  paginate = (currentPage) => {
    this.setState({
      currentPage
    });
  }

  render() {
    const { data, selectedItem, currentPage, itemsPerPage } = this.state;
    
    if(data) {

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
                      paginate={this.paginate}/>
            <Chart selectedItem={selectedItem}/> 
          </section>
        </main>
      );
    } else {
      return <div>Loading...</div>
    }
    
  }
};
