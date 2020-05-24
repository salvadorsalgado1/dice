import React from 'react';
import {Card, Col, Row, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px black"}

    const faStyleJS = {fontSize: "4em", color: "gold"}
    const faStyleReact = {fontSize: "4em", color: "#15aabf"}
    const faStyleHtml = {fontSize: "4em", color: "Tomato"}
    const faStyleCSS = {fontSize: "4em", color: "#3299CC"}
    

const SectionThree = () =>{
    return(
        <div className = "SectionThree">
           <Card style = {cardStyle}>
                <Card.Body>
                    <h2>About</h2>

                    <p>In conclusion, this project demonstrates how expected values are not achieved in the dynamic nature of an experiment. We are concerned 
                with a six arising, but there are other events simultaneously occurring influencing the outcome of the data. In essence, we are working 
                with the conditional probability that a six dealt. Why conditional? Well in order for a six to even be possible, the sum has to be greater than 6 itself. 
                Secondly, there are different combinations to achieve a sum. These two components are what govern the outcomes of our data. 
            </p>

                        <span style= {faStyleReact}><i className="fab fa-react mr-2"></i></span>       
                        <span style = {faStyleHtml}><i class="fab fa-html5 mr-2"></i></span>
                        <span style = {faStyleCSS}><i class="fab fa-css3-alt mr-2"></i></span>
                        <span style = {faStyleJS}><i class="fab fa-js-square mr-2 ml-2"></i></span>
                        <Col><Link to = "/"><Button variant = "secondary">Home</Button></Link></Col>
                 
                </Card.Body>
            </Card>
        </div>
    )
}

export default SectionThree