import React from 'react';
import Logo from './logo';
const Navigation = ({onSearch,searchBar}) =>{
    return(
        <div className='flex justify-between'>
            <Logo />
           
            <input onChange={onSearch} className="h2 w50 ma2 pa2" type = "search" placeholder="Search State" />
        </div>
    );
}

export default Navigation;