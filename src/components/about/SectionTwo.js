import React from 'react';
import {Card} from 'react-bootstrap'

const cardStyle = {
    width:"100%",
    justifyContent:"center",
    boxShadow:"3px 4px 3px black"}
    

    const faStyleDiceSix = {fontSize: "4em", color: "rgb(0, 168, 107)"}


const SectionTwo = () =>{
    return(
        <div className = "SectionTwo">
            <Card style = {cardStyle}>
                <Card.Body>
                    <h2>Theory</h2>
                    <p>Given our experiment ran over any random number of times 
                        created unique data that resembled expected values. The 
                        project’s primary aim was to calculate the probability that 
                        a six was rolled in the case that two dice are rolled <strong>P(Z =6)</strong>. 
                        This can be interpreted as a conditional probability question. 
                        The two dice being rolled can be represented by events <strong>E &amp; F</strong>. 
                        These events are independent of one another. Knowing what the 
                        first dice rolled in <strong>E</strong> will not affect the probability of a six 
                        being rolled in <strong>F</strong>. As our code was running the experiment multiple 
                        times, it was efficient to work with the sum of both dice to 
                        calculate our probabilities for the various sums 
                        <strong>(i = 2,3,4, ...,12)</strong>. This helped quickly confirm 
                        our knowledge that <strong>P(Z=6)</strong> for <strong>i &lt; 7</strong> is 0 &amp; <strong>P(Z = 6)</strong> 
                        for <strong>i > 10</strong> is 1. </p>
                        <p className = "mt-4 mb-4"><i style={faStyleDiceSix} class="fas fa-dice-six"></i></p>
                        <p>
                             The algorithm we created to calculate <strong>P( Z =6)</strong> for each <strong>i</strong> was 
                            simply to take all the times a six was rolled for a specific <strong>i</strong>
                            and divide that by the total number of times that <strong>i</strong> appeared, 
                            with a six or not. For further analysis, we considered the 
                            average and variance of different subsets of the total data. 
                            We applied the expected algorithms to find these and they offer 
                            different insights to our data. 
                        </p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SectionTwo