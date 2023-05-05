import React from 'react'
import shoppingCart from '../assets/shopping-cart.gif'


const CardFeature = ({name,price,description,image,category,loading}) => {
    return (
      <div className='w-full min-w-[400px] bg-white hover:shadow-2xl drop-shadow py-5 px-4 cursor-pointer mt-3 flex flex-col'>
        {name ? (
            <>
            <div className='h-20 flex items-center justify-center'>
          <img src={image} className='h-full' />
        </div>
        <h3 className='font-semibold text-slate-600 text-center capitalize text-lg my-1'>
          {name}
        </h3>
        <p className='text-center text-slate-500 font-medium'>{category}</p>
        <p className='text-center font-bold'>
          <span className='text-orange-400'>₹</span>
          {price}
        </p>
        <button className='bg-orange-500 px-1 py-1 rounded text-white text-lg mt-1'>Add To Cart</button>
            </>
        ): (<div className='flex min-h-[150px] flex-col items-center justify-center h-full'>
            <img src={shoppingCart} className='w-20 h-20'/>
            <p>{loading}</p>
        </div>)}
        
      </div>
    );
}

export default CardFeature