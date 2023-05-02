import React from 'react'

const HomeCard = ({Image,category,description,name,price}) => {
  return (
    <div className='bg-white shadow-md p-2'>
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
    </div>
  );
}

export default HomeCard