import React from 'react';
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px black"}
    const faStyleDice = {fontSize: "4em", color: "crimson"}
function Question(){
    return(
        <div className = "Question" >
            <Card style = {cardStyle}>
                <Card.Body>
                    <h3>Project</h3>
                    <p className = "lead">
                    <strong>Question: </strong> 
                    What is the probability that at least 
                    one pair  of fair Dice lands on 6,
                    given that the sum of the Dice is 
                    i, i = 2, 3, …, 12?
                    </p>
                    <p><i style={faStyleDice} className="fas fa-dice mb-4"></i></p>
                    <Link to = "/"><Button variant = "secondary">Home</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Question