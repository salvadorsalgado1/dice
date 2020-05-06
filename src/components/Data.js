// Calculations will go here
import React from 'react';
import { Button} from 'react-bootstrap';
import Chart from "chart.js";
//import Sum from './Sum';
let diceNums = [];
let diceAdd = [];
let diceTotal = [];
let count_6 = 0;
let count_total = 0;


  for(let i = 1; i <= 36; i++){
   diceTotal.push( Math.floor((Math.random()*6)+1)+ Math.floor((Math.random()*6)+1));
  }
  console.log(diceTotal);
  diceTotal.sort(function(a,b){return a-b});
  console.log("Sorted Random: "+diceTotal);

  for(let i = 1; i<= 6; i++)
  {
      for(let j= 1; j<=6; j++)
      {

          diceNums.push("( "+ i+","+j+" )"+" => "+(i+j));
          diceAdd.push(i+j);
      }
  }

 
class Data extends React.Component{
    chartRef = React.createRef();
    state = {
        value: 1,
        probability: 1,
        output:1,
        chartRef:null,
        label:"Expected",
        data: {
                labels: ["1","2", "3", "4", "5", "6", "7", "8"],
                datasets:{   
                            data: [1,2,3,4,5,6,7,8,9],
                        }},
    }

buttonIncrementHandler = (event, myChartRef) =>{
    this.setState({value: this.state.value + 1});
    this.setState({output: (this.state.value + 1)/12});
   // dice();
}

buttonDeIncrementHandler = (event) =>{
this.setState({value: this.state.value - 1});
this.setState({output: (this.state.value - 1)/12});
}
componentDidUpdate() {
let dice = [];

for(let i = 1; i <= 36; i++){
    dice.push( Math.floor((Math.random()*6)+1)+ Math.floor((Math.random()*6)+1));
  
}
let prob = [];
let diceRandom = [];

function probability(sum) {
    let i = 1, j = 1;
    let count_6 = 0;
    let count_total = 0;
      if (sum < 6 || sum > 12) {return 0}
        for(i = 1; i <= 6; i++) 
        {
          for(j = 1; j<= 6; j++) {
            if(i+j == sum) {
              count_total++;
            if (i == 6 || j == 6) {
              count_6++;
              }
            }
          }
        }
    if(count_6 == 0){
    return 0;   
     }
     return count_6/count_total.toFixed(3);
    }
      for(let i = 2; i <= 12; i++) {
      //probability(4);
      console.log(" when sum is" + i + " is:"+ probability(i).toFixed(3));
      prob.push(probability(i).toFixed(3));
    }
    console.log("Probability in Array " + prob);
    dice.sort(function(a,b){return a-b});
    console.log(dice);

    let One = 0;
    let Two = 0;
    let Three = 0;
    let Four = 0;
    let Five = 0;
    let Six = 0;
    let Seven = 0;
    let Eight = 0;
    let Nine = 0;
    let Ten = 0;
    let Eleven = 0;
    let Twelve = 0;

    for( let i = 0; i < dice.length; i++){
        if(dice[i] === 1){
            One++;
        }else if(dice[i]===2){
            Two++;
        }else if(dice[i] ===3){
            Three++;
        }else if(dice[i] ===4){
            Four++;
        }else if(dice[i] ===5){
            Five++;
        }else if(dice[i]=== 6){
            Six++;
        }else if(dice[i]===7){
            Seven++;
        }else if(dice[i] ===8){
            Eight++;
        }else if(dice[i] ===9){
            Nine++;
        }else if(dice[i] ===10){
            Ten++;
        }else if(dice[i]=== 11){
            Eleven++;
        }else{
            Twelve++;
        }
    }
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
        type: "bar",
        data: {
            labels: [2,3,4,5,6,7,8,9,10,11,12],
                datasets: [
                   {
                    data: [0, 0, 0, 0, 0, .333, .4, .5, .667, 1.0, 1.0],
                    label: this.state.label,
                    backgroundColor: "rgb(0, 200, 255)",
                    borderColor:"rgb(0, 200, 255)",
                },
                {
                    data: [One/12,Two/12,Three/12,Four/12,Five/12,Six/12,Seven/12, Eight/12, Nine/12, Ten/12, Eleven/12, Twelve/12],
                    label: 'Probability',
                    backgroundColor: "rgb(255,99,71)",
                    borderColor: "gray",
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks:{min:0,max:1.5, stepSize:.1},
                    beginAtZero:true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Probability',
                  }
                }],
                xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Sum',
                      beginAtZero:true
                      
                    }
                  }]
              },
            title: {
                display: true,
                text: 'Dice Rolls',
            }
            
            //Customize chart options 
        }
        
    });
}

componentDidMount() {
        console.log("Component did mount");
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: [2,3,4,5,6,7,8,9,10,11,12],
                    datasets: [
                    {   
                        data: [0, 0, 0, 0, 0, .333, .4, .5, .667, 1.0, 1.0],
                        label: this.state.label,
                        backgroundColor: "rgb(0, 200, 255)",
                        borderColor:"rgb(0, 200, 255)",
                    },
                    {
                        label: 'Probability',
                        backgroundColor: "rgb(255,99,71)",
                        borderColor: "gray",
                        data: []
                    }
                ]
            },
            options: {
              
                scales: {
                    yAxes: [{
                        ticks:{min:0,max:1.5, stepSize:.1},
                      scaleLabel: {
                        display: true,
                        labelString: 'Probability',
                        beginAtZero:true
                      }
                    }],
                    xAxes: [{
                        scaleLabel: {
                          display: true,
                          labelString: 'Sum',
                          beginAtZero:true

                          
                        }
                      }]
                  }     ,
                title: {
                    display: true,
                    text: 'Dice Rolls',
                    
                }
                
                
            }
            
        });
    }

   render(){
       return(
            <div className = "Data">
                <p>Number of Dice: {this.state.value}</p> 

                <p>Probability: {this.state.output.toFixed(3)}</p>
                <canvas width = "400" height = "400" id="myChart" ref={this.chartRef} />
                <Button className = "mt-4" onClick = {this.buttonIncrementHandler} block variant = "primary">Calculate</Button>
             {/*   <Button onClick = {this.buttonDeIncrementHandler} block variant = "primary">-</Button>*/}  
            </div>
       )
   }
}
export default Data