import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"5px 4px 3px black"
    
  }
class Home extends React.Component{
  render(){
      return(
          <div>
            <Card style = {cardStyle}>

            <Card.Body>
                <p className = "lead"><strong>Statistics and Probability</strong></p>
                <p className = "lead">Spring 2020</p>
                <p className = "lead">Members</p>
          
            <Link to = "/dice"><Button variant = "primary mr-4">Project</Button></Link>
            <Link to = "/about"><Button variant = "secondary">About</Button></Link>


            </Card.Body>
            </Card>

                      </div>
      )
       
      
  }
}

export default Home
