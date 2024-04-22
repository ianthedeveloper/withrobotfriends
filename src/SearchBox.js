import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input className='pa2 ba ba--orange bg-light-red tc'  
            type="search" 
            placeholder="search robot"
            onChange={searchChange} 
            />
        </div>
    )
}

export default SearchBox;