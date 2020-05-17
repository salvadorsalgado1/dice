// Calculations will go here
import React from 'react';
import { Button} from 'react-bootstrap';
import Chart from "chart.js";
//import Sum from './Sum';

    
    let sumRandDice = [];//= diceRandOne + diceRandTwo;
    let dice = [];
    let count_6 = 0;
    let count_total = 0;
    let seven;
    let eight;
    let nine;
    let ten;
    let eleven;
    let twelve;
function probability() {
     //---------------------------------------------
    


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


  
//-----------------------------------------------------

let counter2 =0;
let counter3=0;
let counter4=0;
let counter5=0;
let counter6=0;
let counter7=0;
let counter8=0;
let counter9=0;
let counter10=0;
let counter11=0;
let counter12=0;

let six2 =0;
let six3 =0;
let six4 =0;
let six5 =0;
let six6 = 0;
let six7=0;
let six8 =0;
let six9 =0;
let six10 =0;
let six11 =0;
let six12 =0;

let prob2 =0;
let prob3 =0;
let prob4 = 0;
let prob5 = 0;
let prob6 =0;
let prob7 =0;
let prob8 =0;
let prob9 = 0;
let prob10 = 0;
let prob11 =0;
let prob12 = 0;

let dice1 ;
let dice2;

for(let i = 0; i < 10000; i++){
 dice1 = Math.floor((Math.random()*6)+1);
  dice2 = Math.floor((Math.random()*6)+1);

let SumofDice = dice1 + dice2;

if(SumofDice >=2 && SumofDice < 13){
  if(SumofDice ==2){
      counter2++;
      if(dice1 ==6 || dice2 ==6){
          six2++;
      }
      prob2 = six2/counter2;
  }
  if(SumofDice ==3){
      counter3++;
      if(dice1 ==6 || dice2 ==6){
          six3++;
      }
      prob3 = six3/counter3;
  }
  if(SumofDice == 4){
      counter4++;
      if(dice1 ==6 || dice2 ==6){
          six4++;
      }
      prob4 = six4/counter4;
  }
  if(SumofDice ==5){
      counter5++;
      if(dice1 ==6 || dice2 == 6){
          six5++;
      }
      prob5 = six5/counter5;
  }
if(SumofDice == 7){
      counter7++;
      if(dice1 == 6 || dice2 == 6){
          six7 ++;
      }
      prob7 =six7 / counter7;
  }
  if(SumofDice == 8){
      counter8++;
      if(dice1 ==6 || dice2 ==6){
          six8++;
      }
   prob8 = six8/ counter8;
  }
  if(SumofDice == 9){
      counter9++;
      if(dice1 == 6 || dice2 ==6){
          six9 ++ ;
      }
  prob9 = six9/ counter9;
  }
  if(SumofDice == 10){
      counter10++;
      if(dice1 ==6 || dice2 == 6){
          six10++;
      }
      prob10 = six10 / counter10;
  }
  if (SumofDice == 11){
      counter11++;
      if(dice1 ==6 || dice2== 6){
          six11 ++;
      }
      prob11 = six11/counter11;
  }
  if(SumofDice == 12){
      counter12 ++;
      if(dice1 ==6 || dice2 ==6){
          six12 ++;
      }
      prob12 = six12/counter12;
    }
  }
}
//-----------------------------------------------------
console.log("2: " + prob2);
console.log("3: " + prob3);
console.log("4: " + prob4);
console.log("5: " + prob5);
console.log("6: " + prob6);
console.log("7: " + prob7);
console.log("8: " + prob8);
console.log("9: " + prob9);
console.log("10: " + prob10);
console.log("11: " + prob11);
console.log("12: " + prob12);



// 3 , 5 = 8

    
    
   
//---------------------------------------------------------

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
                    data: [prob2,prob3,prob4,prob5,prob6,prob7, prob8, prob9, prob10, prob11,prob12 ],
                    label: 'Probability',
                    backgroundColor: "rgb(255,99,71)",
                    borderColor: "gray",
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks:{min:0,max:1, stepSize:.1},
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
                        ticks:{min:0,max:1, stepSize:.1},
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
                {/* <p>Number of Dice: {this.state.value}</p> */}
     
                {/* <p>Probability: {this.state.output.toFixed(3)}</p>*/}
                <canvas width = "400" height = "400" id="myChart" ref={this.chartRef} />
                <Button className = "mt-4" onClick = {this.buttonIncrementHandler} block variant = "primary">Roll</Button>
            </div>
       )
   }
}
export default Data