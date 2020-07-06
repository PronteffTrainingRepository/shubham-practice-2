import React from 'react';

const Hello = () =>
{
    return (
        // <div>
        //     <h1>Hello shubham</h1>
        // </div>
        React.createElement('div', { id:'hi'}, React.createElement('h1',null,'without jsx'))
    )
    }

export default Hello;