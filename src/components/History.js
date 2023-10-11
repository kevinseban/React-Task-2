import React from 'react';

function History({ expressions }) {
    return (
        <div className="history-container">
            <div>
                {expressions.map((expression, index) => (
                    <div key={index}>{expression}</div>
                ))}
            </div>
        </div>
    );
}

export default History;
