import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px black",
    
  }
  
class Home extends React.Component{
  render(){
      return(
          <div className = "Title">
            <Card style = {cardStyle}>
              <Card.Body>
                  <p><i class="fa fa-grav fa-5x"></i></p>
                  <p className = "lead"><strong>Statistics and Probability</strong></p>
                  <p className = "lead">Math 352</p>
                  <p className = "lead">Spring 2020</p>
                  <hr></hr>
                  <p className = "lead">Daniel Ramirez</p>
                  <p className = "lead">Juan Zarate</p>
                  <p className = "lead">Salvador Salgado</p>
                  <hr></hr>
                  <Link to = "/dice"><Button variant = "primary mr-4">Project</Button></Link>
                  <Link to = "/about"><Button variant = "secondary">About</Button></Link>
                  
              </Card.Body>
            </Card>
          </div>
      )
  }
}

export default Home
