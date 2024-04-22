import React from 'react';

const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className='bg-light-blue dib br4 ma3 pa3 grow tc'>
            <img src='https://robohash.org/hihihihiha?212*212' alt='robot img'/>
            <div>
                <p>{id}</p>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Card;
