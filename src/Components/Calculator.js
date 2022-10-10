import React from 'react';
import Buttons from './Buttons';
import Displayer from './Displayer';
const Calculator = () => {
    return (
        <div className='Calculator'>
            <Displayer/>
            <Buttons/>
        </div>
    );
};

export default Calculator;