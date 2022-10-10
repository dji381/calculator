import React from 'react';

const Button = ({number, handleClickNumber}) => {
    return (
        <div>
            <button onClick={()=>handleClickNumber(number)}>{number}</button>
        </div>
    );
};

export default Button;