import React from 'react';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import diceimg from '../images/dicesm.jpg'
import SectionOne from './about/SectionOne'
import SectionTwo from './about/SectionTwo'
import SectionThree from './about/SectionThree'
  
const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px darkgray"}


function About(){
    return(
        <div className = "about lead">
            <Container>
                <Row className ="mt-3"><Col lg={12}><SectionOne/></Col></Row>
                <Row className ="mt-3"><Col lg={12}><SectionTwo/></Col> </Row>
                <Row className ="mt-3 mb-5"><Col lg={12}><SectionThree/></Col></Row>                
            </Container>
        </div>
    )
}
export default About