// Calculations will go here
import React from 'react';
import { Button} from 'react-bootstrap';
import Chart from "chart.js";


class Data extends React.Component{

state = {
    value: 1,
    probability: 1,
    output:1
}

buttonIncrementHandler = (event) =>{

this.setState({value: this.state.value + 1});
this.setState({output: (this.state.value + 1)/12});

}
buttonDeIncrementHandler = (event) =>{
    
this.setState({value: this.state.value - 1});
this.setState({output: (this.state.value - 1)/12});
}

chartRef = React.createRef();
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
           
            data: {
                //Bring in data
                    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    
                    datasets: [
                    {   
                        label: "Probability",
                        data: [3, 10, 5, 6, 3, 6, 8, 10, 3, 1, 4, 7, 9],
                        backgroundColor: ["rgb(0, 255, 255, .1)"],

                        borderColor:"rgb(0, 255, 254, .6)",
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                      scaleLabel: {
                        display: true,
                        labelString: 'Probability'
                      }
                    }],
                    xAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'Dice'
                        }
                      }]
                  }     ,
                title: {
                    display: true,
                    text: 'Dice Rolls'
                }
                
                //Customize chart options 
            }
            
        });
    }
   render(){
       return(
            <div className = "Data">
                <p>Number of Dice: {this.state.value}</p> 
                <p>Probability: {this.state.output.toFixed(3)}</p>
                <canvas width = "400" height = "400" id="myChart" ref={this.chartRef} />
                <Button className = "mt-4" onClick = {this.buttonIncrementHandler} block variant = "success">+</Button>
                <Button onClick = {this.buttonDeIncrementHandler} block variant = "primary">-</Button>
            </div>
       )
   }
}
export default Data