import React from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import Question from './Question';
import Calculate from './Calculate';
import Tables from './dice/Tables';

function Dice(){
    return(
        <div className = "Dice">
            <Container>
                <Row className = "mb-3">
                    <Col lg={12}><Question/></Col>
                </Row>
              <Row className = "mb-4">
                    <Col lg={12}><Calculate /></Col>
                </Row> 
                <Row>
                    <Col><Tables/></Col>
                </Row>
            </Container>
        </div>
    )}
export default Dice