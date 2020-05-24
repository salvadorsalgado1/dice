import React from 'react'
import {Table} from 'react-bootstrap';


const Excel = (props) =>{
    return(
        <div>
            <h2>{props.value}</h2>
            <Table hover bordered striped>
                <caption>Table {props.caption}</caption>
                <thead>
                    <tr>
                        <th>Rolls</th>
                        <th>Average of {props.headingOne}</th>
                        <th>Variance of {props.headingTwo}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10,000</td>
                        <td>{props.one}</td>
                        <td>{props.two}</td>
                    </tr>
                    <tr>
                        <td>50,000</td>
                        <td>{props.three}</td>
                        <td>{props.four}</td>
                    </tr>
                    <tr>
                        <td>100,000</td>
                        <td>{props.five}</td>
                        <td>{props.six}</td>
                    </tr>
                    <tr>
                        <td>250,000</td>
                        <td>{props.seven}</td>
                        <td>{props.eight}</td>
                    </tr>
                    <tr>
                        <td>500,000</td>
                        <td>{props.nine}</td>
                        <td>{props.ten}</td>
                    </tr>
                    <tr>
                        <td>750,000</td>
                        <td>{props.eleven}</td>
                        <td>{props.twelve}</td>
                    </tr>
                    <tr>
                        <td>1,000,000</td>
                        <td>{props.thirteen}</td>
                        <td>{props.fourteen}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Excel