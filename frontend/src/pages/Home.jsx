import React from 'react';
import { useSelector } from 'react-redux';
import deliveryBike from '../assets/food-delivery-bike.png';
import HomeCard from '../components/HomeCard';

const Home = () => {
  const productList = useSelector(state => state.product.productList);
  const homeProductList = productList.slice(0, 5);

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2'>
          <div className='flex gap-3 items-center bg-slate-300 rounded-full px-2 py-1  w-36'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src={deliveryBike} alt='' className='h-7 ' />
          </div>
          <h1 className='text-4xl md:text-7xl py-4 font-bold'>
            The Fastest Delivery To{' '}
            <span className='text-orange-500'>Your Home</span>
          </h1>
          <p className='text-base py-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, eum
            fuga? Assumenda minus aut saepe quam mollitia ipsum fuga quis
            doloremque, minima illum voluptatibus nemo iure, corporis sequi
            magni officia eligendi natus incidunt temporibus provident
            laboriosam omnis recusandae possimus! Cumque, saepe voluptates modi
            cum blanditiis deleniti asperiores autem numquam aspernatur?
          </p>
          <button className='bg-orange-500 text-white font-bold px-4 rounded-md py-2'>
            Order Now
          </button>
        </div>
        <div className='md:w-1/2 flex flex-wrap gap-5 justify-center p-4'>
          {homeProductList?.map((list, i) => {
            return (
              <div key={i}>
                <HomeCard 
                Image={list.Image} 
                category={list.category}
                description={list.description}
                name={list.name}
                price={list.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
