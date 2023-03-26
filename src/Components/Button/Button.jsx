import React from 'react';

const Button = (props) => {
    return (
        <div className='text-center'>
            <button className='bg-error p-2 rounded-lg mt-2 text-white font-semibold'>{props.children}</button>
        </div>
    );
};

export default Button;