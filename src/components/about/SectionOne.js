import React from 'react';
import {Card, Button} from 'react-bootstrap'
import codeWriteUp from '../../documents/codeWriteUp.pdf'


const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px black"}
    const faStyleDice = {fontSize: "4em", color: "crimson"}
const SectionOne = () =>{
    return(
        <div className = "SectionOne">
            <Card style = {cardStyle}>
                <Card.Body>
                    <h2>The Experiment</h2>
                   
                    <p>In order to get a better 
                        understanding of the type of 
                        data this question 
                    can generate, our team created a 
                    program to record every 
                    aspect of the experiment.
                    The program loops at the current 
                    default state of 10. We chose to go 
                    with React.js because it specializes 
                    in state management.
                    With the buttons underneath the graph labeled:
                    <br></br>
                    <br></br>
                    <Button variant="primary mr-2">Roll 100 Times</Button>
                    <Button variant="primary mr-2">Roll 1000 Times</Button>
                    <Button variant="primary">Roll 10000 Times</Button>
                    <br></br>
                    <br></br>
                    We are able to manipulate the state, therefore the amount of times it loops.
                    The amount of times it would loop would mean the amount of total rolls.
                    We can change the state directly with the buttons we press.

                    We created two random generators ranging between 1-6. 
                    The number is then assigned to a 
                    variable. We add the two variables into another variable of the SumOfDice.

                    We create <strong>If</strong> and <strong>Else</strong> statements that would
                    determine if its in the range of 2 and 13. If it's possible, then check again if the SumOfDice is equal to values 2 through 12.
                    If possible then each counter that correlates with its value, increases by one. Another nested <strong>If</strong>
                    statement that increase the amount of six's according to its counter.
                    Each if statement consists of a calculation according to its value by dividing the amount of six's and the counter.
                    </p>
                    <br/>
                    <p><i style={faStyleDice} class="fas fa-dice fa-lg"></i></p>
                    <br/>
                    <p>For all values of i <strong>&lt; 7</strong> 
                    the probability of a six being 
                    rolled will remain at 0 ,trivially.
                    For i ≥ 7, the way that the probability is 
                    calculated is that the program will 
                    keep tally how many times a specified 
                    value of i appears. Because it takes two dice 
                    to produce the sum, each roll will 
                    add two possibilities for the six to appear. 
                    Thus, our algorithm to calculate the probability 
                    that at least one of the dice 
                    lands on a six is to divide the amount of times a 
                    6 appears on a roll for a specified i by the number of all 
                    times i has appeared multiplied by two 
                    (accounting for each of the dice.) </p>
                    
                    <p><a href={codeWriteUp}>Javascript/Java Random Dice Code</a></p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SectionOne