import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';

class BarChart extends Component {
	constructor(props){
		super(props);
		this.state = {
			chartData: props.chartData
		}
	}

	static defaultProps = {
		displayTitle:true,
		displayLegend:false,
		legendPosition:'top'
	}

	render(){
		return(
			<div className="chart">
				<Bar
					data={this.props.chartData}
					width={150}
					height={50}
					options={{
						title:{
							display:this.props.displayTitle,
							text: `Latest weather sensor readings \n ${this.props.date}`,
							fontSize:25
						},
						legend:{
							display:this.props.displayLegend,
							position:this.props.legendPosition
						},
						maintainAspectRatio: true
					}}
				/>
			</div>
		)
	}
}

export default BarChart;
