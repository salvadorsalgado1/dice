import React from 'react';
import {Card} from 'react-bootstrap';
import Data from './Data';



function Calculate(){
    return(
        <div className = "Calculate">

            <Card className = "w-100">
                <Card.Body>
                    <h2>Calculate</h2>
                    <Data />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Calculate