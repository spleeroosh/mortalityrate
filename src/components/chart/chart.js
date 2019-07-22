import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';
export default class Chart extends Component {
  state = {
    chartData: {
      labels: null,
      datasets: null
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedItem !== this.props.selectedItem) {
      const { selectedItem } = this.props;
      const newData = [
                        selectedItem['2010'],
                        selectedItem['2011'],
                        selectedItem['2012'],
                        selectedItem['2013'],
                        selectedItem['2014'],
                        selectedItem['2015'],
                        selectedItem['2016'],
                        selectedItem['2017']
                      ]

      this.setState({
        chartData: {
          labels: ['2010 year', '2011 year', '2012 year', '2013 year', '2014 year', '2015 year', '2016 year', '2017 year'],
          datasets: [
            {
              label: 'IMR',
              data: newData,
              backgroundColor: '#E74C3C'
            }
          ]
        }
      });
    }
  }

  render() {
    const { selectedItem } = this.props;
    if(selectedItem) {
      console.log(selectedItem)
      return (
        <div className="chart">
          <h4 className="text">Country name: {selectedItem['Country Name']}</h4>
          <h5 className="text">Uncertainty bounds: {selectedItem['Uncertainty bounds*']}</h5>
          <Line data={this.state.chartData} 
                       width={3}
                       height={2}
                       options={{
                         title: {
                           display: true,
                           text: 'Infant Mortality Rate',
                           fontSize:25
                         },
                         legend: {
                           display: true,
                           position: 'right'
                         }
                       }}/>
        </div>
      )
    }
    return (
      <div className="chart text">Select from the list, please.</div>
    )
  }
}