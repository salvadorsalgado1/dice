import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Data from './Data';

function Calculate(){
    return(
        <div className = "Calculate">

            <Card>
                <Card.Body>
                    <h3>Calculate</h3>


                    <Data />

                   
                </Card.Body>
            </Card>
        </div>
    )
}

export default Calculate