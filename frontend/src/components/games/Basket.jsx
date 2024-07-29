import React from 'react';

const Basket = ({ x, onMouseDown, onTouchStart }) => {
    return (
        <div
            className="absolute bottom-2"
            style={{
                left: `${x}px`,
                width: '100px',
                height: '50px',
                backgroundColor: '#8B4513',
                borderRadius: '5px',
                border: '2px solid #333',
                cursor: 'move',
            }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
        />
    );
};

export default Basket;
