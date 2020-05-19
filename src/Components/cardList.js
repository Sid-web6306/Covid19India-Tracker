import React from 'react';
import Card from './card';


const cardList = ({states}) =>{
    return (
        <div>{
            states.map((state,i)=>{
                return (
                    <Card
                        key ={i}
                        state={states[i].state}
                        cured ={states[i].cured}
                        deaths = {states[i].deaths}
                        noOfCases = {states[i].noOfCases}
                    />
                );
            })
        }
        </div>
    );
}

export default cardList;