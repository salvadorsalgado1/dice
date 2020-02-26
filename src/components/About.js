import React from 'react';
import {Card, Button, Col, Row, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const faStyleJS = {
    fontSize: "4em", color: "gold"
}
const faStyleReact = {
    fontSize: "4em", color: "#15aabf"}
    const faStyleHtml = {
        fontSize: "4em", color: "Tomato"}
        const faStyleCSS = {
            fontSize: "4em", color: "#3299CC"
        }
function About(){
    return(
        <div className = "about">
<Card>
    <Card.Body>
        <h2>About</h2>
        <p>
        
                    <span style = {faStyleJS}><i class="fab fa-js-square mr-2 ml-2"></i></span>
        <span style= {faStyleReact}><i className="fab fa-react mr-2"></i></span>
                 
                
                   
                    <span style = {faStyleHtml}><i class="fab fa-html5 mr-2"></i></span>
       <span style = {faStyleCSS}><i class="fab fa-css3-alt mr-2"></i></span>
               
           

        

      </p>
        <Link to = "/"><Button variant = "secondary">Home</Button></Link>

    </Card.Body>
</Card>
        </div>
    )
}

export default About