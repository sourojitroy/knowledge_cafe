import React, { useEffect, useState } from 'react';


const Cart = ({blogs}) => {
    const [totalTime,setTotalTime]=useState(blogs)
    useEffect(()=>{
        const getTimefromStorage=localStorage.getItem('blogsList');
        setTotalTime(getTimefromStorage);
    },[blogs])

    return (
        <div className='py-10'>
            <div className='w-96 h-20 bg-cart-one'>
                <h3 className='text-[#6047EC] text-2xl font-semibold px-10 py-5'>Spent time on read : {totalTime} min</h3>
                <h4 className='text-black text-2xl font-semibold py-8'>Bookmarked Blogs : 4 </h4>
            </div>
            <div className='p-6 bg-slate-300'>

            </div>
        </div>
    );
};

export default Cart;