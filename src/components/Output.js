import React from 'react';

function Output(props) {
    return (
        <div>
            <input className='output' type="text" value={props.value} readOnly />
        </div>
    );
}

export default Output;
