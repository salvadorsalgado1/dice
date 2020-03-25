import React from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import Question from './Question';
import Calculate from './Calculate';

import TableStats from './TableStats';

const cardStyle = {
    width:"18rem;"
}

function Dice(){
    return(
        <div className = "Dice">
            <Container>
                <Row className = "mb-3"><Col><Question style = {cardStyle}/></Col></Row>
                <Row className = "mb-3">
                    <Col><TableStats/></Col>
                    <Col><Calculate style = {cardStyle}/></Col>
                </Row>
            </Container>
        </div>
    )}
export default Dice