import React from 'react';

const Card = (props)=>{
    return (
        
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h3>State Name:{props.state}</h3>
            <div>
                <p>Total Cases:{props.noOfCases}</p>
                <p>Total Recovered Cases:{props.cured}</p>
                <p>Total Death: {props.deaths}</p>
            </div>
        </div>
    );
}

export default Card;
