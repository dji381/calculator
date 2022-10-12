import React from 'react';
import Buttons from './Buttons';
import Displayer from './Displayer';
import '../css/calculator.css'
import CalculatorContextProvider from '../Context/CalculatorContext';
const Calculator = () => {
    return (
        <div className='calculator'>
            <CalculatorContextProvider>
                <Displayer/>
                <Buttons/>
            </CalculatorContextProvider>
        </div>
    );
};

export default Calculator;