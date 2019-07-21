import React, { Component } from 'react';
import './app.css';
import readTextFile from './../data/read-text-file';
import uuid from 'uuid';

import Details from './../details';
import ItemList from './../item-list';

export default class App extends Component {

  state = {
    data: null,
    selectedItem: null
  }

  componentDidMount() {
    this.getData();
  }

  getSelectedItem = (id) => {
    let selectedItem;
    this.state.data.map((item) => {
      if(item['id'] === id) {
        selectedItem = item;
      } else {
        return;
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

  render() {
    const { data, selectedItem } = this.state;
    if(data) {
      return (
        <main className="container">
          <section className="jumbotron main-section">
            <ItemList data={data} onClickItem={this.getSelectedItem}/>
            <Details selectedItem={selectedItem} />
          </section>
        </main>
      );
    } else {
      return <div>Loading...</div>
    }
    
  }
};
