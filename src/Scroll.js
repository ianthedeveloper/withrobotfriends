import React from 'react';

const Scroll = (props) => {
    return(
        <div style = {{overflow: "scroll", border: "2px solid grey", height: "1000px", padding: "11px", margin: "17px"}}  >
            {props.children}
        </div>
    )
}

export default Scroll; 