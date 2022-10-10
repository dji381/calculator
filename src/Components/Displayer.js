import React from 'react';

const Displayer = ({number, sum}) => {
    return (
        <div className='displayer'>
            {number ? number : 0}
        </div>
    );
};

export default Displayer;