import React, { useContext } from 'react';
import '../css/displayer.css'
import { CalculatorContext } from '../Context/CalculatorContext';

const Displayer = () => {
    const [numberDisplayed, handleClickNumber,handleClickOperation, setNumberDisplayed] = useContext(CalculatorContext);
    return (
        <div className='displayer'>
            {numberDisplayed}
        </div>
    );
};

export default Displayer;