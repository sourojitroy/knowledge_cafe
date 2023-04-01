import React from 'react';

const SingleCart = ({cart}) => {
    console.log(cart.title);
    return (
        <div className='w-80 h-24 bg-red-500'>
            <h2 className='text-2xl text-left bg-red-500 py-8'>{cart.title}</h2>
        </div>
    );
};

export default SingleCart;