import React from 'react';

const Greet = (props) => {
    return (
        <div>
            <h1>Myself {props.name} MY location is {props.location}</h1>
            {props.children}
            </div>
    )
}

export default Greet;