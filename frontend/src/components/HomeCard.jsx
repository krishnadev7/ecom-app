import React from 'react'
import shoppingCart from '../assets/shopping-cart.gif'

const HomeCard = ({ Image, category, description, name, price, loading }) => {
  return (
    <div className='bg-white shadow-md p-2 rounded min-w-[150px]'>
      {name ? (
        <>
          <div className='w-40 h-40'>
            <img src={Image} className='w-full h-full' />
          </div>
          <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>
            {name}
          </h3>
          <p className='text-center text-slate-500 font-medium'>{category}</p>
          <p className='text-center font-bold'>
            <span className='text-orange-400'>₹</span>
            {price}
          </p>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center h-full'>
          <img src={shoppingCart} className='w-40 h-40 '/>
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard