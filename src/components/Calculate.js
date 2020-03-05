import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Data from './Data';
import Graph from './Graph';

const cardStyle = {
    width:"18rem;"
}
function Calculate(){
    return(
        <div className = "Calculate">

            <Card className = "w-100">
                <Card.Body>
                    <h3>Calculate</h3>


                    <Data />

                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default Calculate