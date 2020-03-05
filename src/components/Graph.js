import React from 'react';
import {Card} from 'react-bootstrap';
import Chart from "chart.js";




class Graph extends React.Component{
    chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March", "April", "May"],
                datasets: [
                    {
                        label: "Sales",
                        data: [84, 32, 91, 10, 100],
                        backgroundColor: ["yellow" , "dodgerblue", "orange", "lightpurple", "pink"] 
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render(){
         return(
    <div className = "graph mb-4">
        
                <canvas
                    id="myChart"
                    ref={this.chartRef}/>
    </div>
    )
    }
   
}

export default Graph