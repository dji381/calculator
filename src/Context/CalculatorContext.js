import React, {createContext, useState} from 'react';

export const CalculatorContext = createContext();

const CalculatorContextProvider = (props) => {
    const [numberDisplayed, setNumberDisplayed] = useState("0");
    const handleClickNumber = (num)=>{
        numberDisplayed === "0" ? setNumberDisplayed(num) : setNumberDisplayed(numberDisplayed+num);
        
    }
    

    return (<CalculatorContext.Provider value={[numberDisplayed, handleClickNumber, setNumberDisplayed]}>
        {props.children}
    </CalculatorContext.Provider>)

}
export default CalculatorContextProvider;