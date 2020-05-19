import React from 'react';

const Card = (props)=>{
    return (
        
        <div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h3>{props.state}</h3>
            <div>
                <p>Covid Cases:{props.noOfCases}</p>
                <p style={{color:'#4ed44e'}}>Recovered: {props.cured}</p>
                <p style= {{color:'#a93434'}}>Deaths: {props.deaths}</p>
            </div>
        </div>
    );
}

export default Card;
