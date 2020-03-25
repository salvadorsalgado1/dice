import React from 'react';
import {Card, Table} from 'react-bootstrap';

const TableStats = (props) =>
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
                                    <th>Expected</th>
                                    <th>Probability</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>{props.first}</td>
                                    <td>1.1/12</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>2/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>2/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>2/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>2/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>2/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>7/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>8/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>9/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>2/12</td>
                                    <td>2.1/12</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>2/12</td>
                                    <td>2.1/12</td>
                                </tr>
                            </tbody>
                        </Table>
                </Card.Body>
            </Card>

        </div>
    )
}

export default TableStats