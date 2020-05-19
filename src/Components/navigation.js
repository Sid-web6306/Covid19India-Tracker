import React from 'react';
import Logo from './logo';
const Navigation = ({onSearch,searchBar}) =>{
    return(
        <div className='flex justify-between'>
            <Logo />
            <h2 className ='tc'>Covid19-India Tracker</h2>
            <input onChange={onSearch} className="h2 w50 pa2" type = "search" placeholder="Search state" />
        </div>
    );
}

export default Navigation;