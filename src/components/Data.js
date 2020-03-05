// Calculations will go here
import React from 'react';

import { Button} from 'react-bootstrap';


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




   render(){
       return(
            <div className = "Data">
            <p>Number of Dice: {this.state.value}</p> 
            <p>Probability: {this.state.output.toFixed(3)}</p>
            <Button onClick = {this.buttonIncrementHandler} block variant = "success">+</Button>
            <Button onClick = {this.buttonDeIncrementHandler} block variant = "primary">-</Button>
           </div>
       )
   }
}
export default Data