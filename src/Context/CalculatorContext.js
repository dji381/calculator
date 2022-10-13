import React, {createContext, useState, useRef} from 'react';

export const CalculatorContext = createContext();

const CalculatorContextProvider = (props) => {
    const previousNumber = useRef(" ");
    const nextNumber = useRef(" ");
    const sign = useRef(null);
    const [numberDisplayed, setNumberDisplayed] = useState("0");
    const handleClickNumber = (num)=>{
        numberDisplayed === "0" ? setNumberDisplayed(num) : setNumberDisplayed(numberDisplayed+num);
        
    }
    

    return (<CalculatorContext.Provider value={[numberDisplayed, handleClickNumber, setNumberDisplayed,previousNumber,nextNumber,sign]}>
        {props.children}
    </CalculatorContext.Provider>)

}
export default CalculatorContextProvider;