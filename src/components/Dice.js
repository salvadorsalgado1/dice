import React from 'react';
import {Card, Button, Col, Row, Container} from 'react-bootstrap';
import Question from './Question';
import Calculate from './Calculate';


function Dice(){
    return(
        <div className = "Dice">
<Container>
    <Row>
        <Col xs = "6"><Question /></Col>
        <Col xs = "6"><Calculate/></Col>
    </Row>
    
</Container>

     
        </div>
    )
}

export default Dice