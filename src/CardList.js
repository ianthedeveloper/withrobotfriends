import React from 'react';
import Card from './Card';
import {robots} from './robots';

const CardList = () => {
    const loopingRobots = robots.map((element, i) => (
        <Card id = {robots[i].id}  name = {robots[i].name}  email = {robots[i].email} /> 
    ));

    return(
        <div>
            {loopingRobots}
        </div>
    )
}

export default CardList;