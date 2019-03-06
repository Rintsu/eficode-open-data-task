import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import BarChart from './BarChart.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			chartData: {},
			date:''
		}
	}

	getData(that) {
		$.ajax({
			beforeSend:function(request){
				request.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMwLCJlbWFpbCI6InRlc3RtYWlsIiwiaWF0IjoxNTUxNjk2MzY0fQ.ewPllH3Z9sAFnnpLXMZd83h_Y102kt8suThU9-jqWks");
			},
			dataType: "json",
			url: "https://opendata.hopefully.works/api/events",
			success: (function(data){
				console.log(data);
				that.setState({
					date: data.date,
					chartData:{
						labels: Object.keys(data, delete data.date),
						datasets: [
							{
								label:'Latest Readings',
								data: Object.values(data),
								backgroundColor: [
									'rgba(255, 99, 132, 0.6)',
									'rgba(54, 162, 235, 0.6)',
									'rgba(255, 206, 86, 0.6)',
									'rgba(75, 192, 192, 0.6)'
								]
							}
						]
					}
				});
			})
		})
	}

	componentDidMount(){
		this.getData(this)
	}

  render() {
    return (
      <div className="App">
				<BarChart chartData={this.state.chartData} date={this.state.date}/>
      </div>
    );
  }
}

export default App;
