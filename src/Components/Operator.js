import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { CalculatorContext } from '../Context/CalculatorContext';
const Operator = ({operator, action}) => {
    const [numberDisplayed, handleClickNumber, setNumberDisplayed,previousNumber,nextNumber,sign] = useContext(CalculatorContext);
    const operation = (action)=>{
        switch (action.current){
            case 'plus' : 
                return parseFloat(previousNumber.current) + parseFloat(nextNumber.current);
            case 'minus' :
                return parseFloat(previousNumber.current)-parseFloat(nextNumber.current) ;
        }
    }
    const handleClickOperation = (state,action)=>{
        console.log('appel');
        switch (action.type){
            case 'plus' :
                console.log('plus')
                if (previousNumber.current === " "){
                    previousNumber.current = numberDisplayed;
                    sign.current = action.type;
                    console.log(previousNumber,"prev");
                    state = parseInt(numberDisplayed);
                    return state;

                } else{
                    nextNumber.current = numberDisplayed;
                    console.log(nextNumber,"nextnb");
                    state = operation(sign);
                    sign.current = action.type;
                    previousNumber.current = state.toString();
                    console.log(previousNumber,"previuos in next");
                    return state;
                } 
                
            case 'minus' : 
                if (previousNumber.current === " "){
                    previousNumber.current = numberDisplayed;
                    console.log(previousNumber,"prev");
                    state = parseInt(numberDisplayed);
                    return state;

                } else{
                    nextNumber.current = numberDisplayed;
                    console.log(nextNumber,"nextnb");
                    state = operation(sign) ;
                    sign.current = action.type;
                    previousNumber.current = state.toString();
                    console.log(previousNumber,"previuos in next");
                    return state;
                } 
            case 'equals' :
                nextNumber.current = numberDisplayed;
                state = operation(sign);
                previousNumber.current = state.toString();
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