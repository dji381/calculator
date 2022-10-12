import React, { useContext } from 'react';
import { CalculatorContext } from '../Context/CalculatorContext';

const Button = ({number}) => {
    const [numberDisplayed,handleClickNumber] = useContext(CalculatorContext);
    return (
        <button onClick={()=>handleClickNumber(number)}>{number}</button>
        
    );
};

export default Button;