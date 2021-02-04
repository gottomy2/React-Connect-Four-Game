import React from 'react';

const style = {
    background: '#5F758E',
    border: '2px solid FloralWhite',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    height: '100px',
    weight: '50px',
    outline: 'none'
};

const Square = ({ id, value, onClick }) => (
    <button id={id} style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;
