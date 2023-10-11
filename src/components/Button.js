import React from 'react';

function Button(props) {
    return (
        <button className={`btn ${props.className}`} onClick={() => props.onClick(props.label)}>{props.label}</button>
    );
}

export default Button;
