import React from 'react';
import Card from './Card';
import {robots} from '../robots';

const CardList = ({robots}) => {
    const loopingRobots = robots.map((element, i) => {
    return <Card key = {i}  id = {robots[i].id}  name = {robots[i].name}  email = {robots[i].email} /> 
    });

    return(
        <div>
            {loopingRobots}
        </div>
    )
}

export default CardList;










// Same Code. Diff: Curly braces in the map function

// import React from 'react';
// import Card from './Card';
// import {robots} from './robots';

// const CardList = () => {
//     const loopingRobots = robots.map((element, i) => (
//     <Card id = {robots[i].id}  name = {robots[i].name}  email = {robots[i].email} /> 
//     ));

//     return(
//         <div>
//             {loopingRobots}
//         </div>
//     )
// }

// export default CardList;