import React from 'react';
import {Card, Button, Col, Row, Container} from 'react-bootstrap';
import Question from './Question';
import Calculate from './Calculate';
import Graph from './Graph';
const cardStyle = {
    width:"18rem;"
}

function Dice(){
    return(
        <div className = "Dice">
<Container>
    <Row className = "mb-3">
        <Col className = "mb-3" xs = "12" sm = "6"><Question style = {cardStyle}/></Col>
        <Col xs = "12" sm = "6"><Calculate style = {cardStyle}/></Col>
    </Row>
</Container>

     
        </div>
    )
}

export default Dice