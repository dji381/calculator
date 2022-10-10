import React from 'react';

const Operator = ({operator,handleClickOperation}) => {
    return (
        <div>
            <button onClick={()=>handleClickOperation(operator)}>{operator}</button>
        </div>
    );
};

export default Operator;