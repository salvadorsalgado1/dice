import React from 'react';
import {Card} from 'react-bootstrap';
import Data from './Data';

const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px black"}

function Calculate(){
    return(
        <div className = "Calculate">

            <Card style = {cardStyle}>
                <Card.Body>
                    <h2>Calculate</h2>
                    <Data />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Calculate