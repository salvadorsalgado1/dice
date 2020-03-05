import React from 'react';
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function Question(){
    return(
        <div className = "Question">
            <Card>
                <Card.Body>
                    <h3>Project</h3>
                    <p className = "lead">
                    <strong>Question:</strong>&nbsp; 
                    What is the probability that at least 
                    one pair <br/> of fair Dice lands on 6,
                    given that the sum of the Dice <br/> is 
                    i, i = 2, 3, …, 12?
                    </p>
                    <Link to = "/"><Button variant = "secondary">Home</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Question