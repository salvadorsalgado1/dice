import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import Excel from './Excel'

const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px black",
    
  }

const Tables = () =>{
    return(
        <div className ="Tables">
            <Container>
                <Row>
                    <Col>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Excel  
                                    value=""
                                    caption="1"
                                    headingOne="P(X_1+X_2=i)"
                                    headingTwo="P(X_1+X_2=i)"
                                    //-----------Row 1------------
                                    one="7.007"
                                    two="4.879"
                                    //-------------------------------
                                    //-----------Row 2---------------
                                    three="7.00364"
                                    four="4.8353"
                                    //-------------------------------
                                    five="7.00326"
                                    six="4.8289"
                                    seven="7.00216"
                                    eight="4.82917"
                                    nine="6.996546"
                                    ten="4.838226"
                                    eleven="6.9987773"
                                    twelve="4.82777"
                                    thirteen="6.999"
                                    fourteen="4.8424"/>
                        </Card.Body>
                    </Card>
                                
                    </Col>
                </Row>
                <Row className = "mt-3">
                    <Col>
                    <Card style={cardStyle}>
                            <Card.Body>
                                <Excel
                                caption="2" 
                                headingOne="P(Z=6|i)*P(i)"
                                headingTwo="P(Z=6|i)*P(i)"
                                //-----------Row 1------------
                                one="1.39%"
                                two=".02%"
                                //-------------------------------
                                //-----------Row 2---------------
                                three="1.41%"
                                four=".0184%"
                                //-------------------------------
                                five="1.43%"
                                six=".02%"
                                seven="1.41%"
                                eight=".0203%"
                                nine="1.36%"
                                ten=".0204%"
                                eleven="1.36%"
                                twelve=".02%"
                                thirteen="1.32%"
                                fourteen=".0196%"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className = "mt-3 mb-4">
                    <Col>  
                    <Card style={cardStyle}>
                            <Card.Body>
                                <Excel
                                caption="3"
                                headingOne="P(Z=6)"
                                headingTwo="P(Z=6)"
                                //-----------Row 1------------
                                one="30.64%"
                                two="21.3681%"
                                //-------------------------------
                                //-----------Row 2---------------
                                three="30.73%"
                                four="21.3357%"
                                //-------------------------------
                                five="30.48%"
                                six="21.3309"
                                seven="30.68%"
                                eight="21.3182%"
                                nine="30.49%"
                                ten="21.2941%"
                                eleven="30.56%"
                                twelve="21.2812%"
                                thirteen="30.56%"
                                fourteen="21.2730%"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
         

         


            
        </div>
    )
}
export default Tables