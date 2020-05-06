import React from 'react';
import {Card, Table} from 'react-bootstrap';
let prob = [];
function probability(sum) {
    let i = 1, j = 1;
    let count_6 = 0;
    let count_total = 0;
      if (sum < 6 || sum > 12) {return 0}
    
        for(i = 1; i <= 6; i++) 
        {
          for(j = 1; j<= 6; j++) {
            if(i+j == sum) {
              count_total++;
            if (i == 6 || j == 6) {
              count_6++;
              }
            }
          }
        }
    if(count_6 == 0){
    return 0;   
     }
     return count_6/count_total.toFixed(3);
     
    }
      for(let i = 2; i <= 12; i++) {
      //probability(4);
      console.log(" when sum is" + i + " is:"+ probability(i).toFixed(3));
      prob.push(probability(i).toFixed(3));
    }

console.log(prob);
//2: 0
//3: 0
//4: 0
//5: 0
//6: 0
//7: .3333
//8: .400
//9: .500
//10: .667
//11: 1.00
//12: 1.00


const TableStats = () =>
{
    return(
        <div className = "table">
            <Card>
                <Card.Body>
                    <h2>Table</h2>
                        <Table striped bordered hover>
                            
                            <thead>
                                <tr>
                                    <th>Sum</th>
                                    <th>Probability</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>{prob[0]}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{prob[1]}</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>{prob[2]}</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>{prob[3]}</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>{prob[4]}</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>{prob[5]}</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>{prob[6]}</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>{prob[7]}</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>{prob[8]}</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>{prob[9]}</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>{prob[10]}</td>
                                </tr>
                            </tbody>
                        </Table>
                </Card.Body>
            </Card>

        </div>
    )
}

export default TableStats