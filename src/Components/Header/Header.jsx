import React from 'react';

const Header = () => {
    return (
        <div className='header bg-black p-4 text-center text-white space-y-2'>
            <h2 className='text-3xl '>Welcome To AI-UNIVERSE</h2>
            <button className='bg-error p-2 rounded-lg'>Sort By Age</button>
        </div>
    );
};

export default Header;