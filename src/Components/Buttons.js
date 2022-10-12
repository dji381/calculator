import React, { useState } from 'react';
import Button from './Button';
import Operator from './Operator';
import '../css/buttons.css'

const Buttons = () => {
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    const operator = ["+","-","=","/","*"];
    const action = ['plus',"minus",'equals'];
    return (
        <div className='buttons_calc'>
            <div>
            {numbers.map((num, index)=><Button
            key={index}
            number ={num}/>)}
            </div>
           <div>
            {operator.map((ope,index)=><Operator
            key={index}
            operator = {ope}
            action ={action[index]}/>)}
            
           </div>

        </div>
        /*comment*/
        
    );
};

export default Buttons;