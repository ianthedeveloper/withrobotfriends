import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input 
            className='pa2 ba ba--orange bg-white tc'  
            type="search" 
            placeholder="search robot"
            onChange={searchChange} 
            />
        </div>
    )
}

export default SearchBox;