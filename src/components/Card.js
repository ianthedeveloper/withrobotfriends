import React from 'react';

const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className='bg-light-blue dib br4 ma3 pa3 grow tc bw3 shadow-7'>
            <img src={`https://robohash.org/${id}?212*212`} alt='robot img'/>
            <div>
                <p>{name}</p>
                <h2>{email}</h2>
            </div>
        </div>
    )
}

export default Card;
