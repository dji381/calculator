import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { CalculatorContext } from '../Context/CalculatorContext';
const Operator = ({operator, action}) => {
    const previousNumber = useRef(" ");
    const nextNumber = useRef(" ");
    const [numberDisplayed, handleClickNumber, setNumberDisplayed] = useContext(CalculatorContext);
    
    const handleClickOperation = (state,action)=>{
        console.log('appel');
        switch (action.type){
            case 'plus' :
                console.log('plus')
                if (previousNumber.current === " "){
                    previousNumber.current = numberDisplayed;
                    console.log(previousNumber,"prev");
                    state = parseInt(numberDisplayed);
                    return state;

                } else{
                    nextNumber.current = numberDisplayed;
                    console.log(nextNumber,"nextnb");
                    state = parseInt(nextNumber.current) + parseInt(previousNumber.current);
                    previousNumber.current = state.toString();
                    return state;
                } 
                
            case 'minus' : 
                return  parseInt(numberDisplayed) - state;
            case 'equals' :
                return state;    
        }
    }
    const [sum, dispatch] = useReducer(handleClickOperation,0);
    useEffect(()=>{
        setNumberDisplayed("0")
    console.log(sum);}
    ,[sum])
    return (
        
        <div>
            <button onClick={()=>dispatch({type : action})}>{operator}</button>
        </div>
    );
};

export default Operator;