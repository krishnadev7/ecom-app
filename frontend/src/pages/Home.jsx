import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import deliveryBike from '../assets/food-delivery-bike.png';
import HomeCard from '../components/HomeCard';
import CardFeature from '../components/CardFeature';
import {GrPrevious} from 'react-icons/gr'
import {GrNext} from 'react-icons/gr'

const Home = () => {
  const productList = useSelector(state => state.product.productList);
  const homeProductList = productList.slice(0, 5);
  const vegetablesList = productList.filter(
    data => data.category === 'vegetables'
  );
  console.log(homeProductList);

  const loadingArray = new Array(3).fill(null);
  const loadingVegArray = new Array(10).fill(null);

  const sliderRef = useRef();

  const nextProduct = () => {
    sliderRef.current.scrollLeft += 420;
  }
  
  const prevProduct = () => {
    sliderRef.current.scrollLeft -= 420;
  }

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
          {homeProductList[0]
            ? homeProductList.map(list => {
                return (
                  <HomeCard
                    key={list._id}
                    Image={list.Image}
                    category={list.category}
                    description={list.description}
                    name={list.name}
                    price={list.price}
                  />
                );
              })
            : loadingArray.map((list, i) => {
                return <HomeCard key={i} loading={'Loading...'} />;
              })}
        </div>
      </div>

      <div className=''>
        <div className='w-full flex items-center'>
          <h2 className='font-bold text-4xl text-slate-800'>
            Fresh Vegetables
          </h2>
          <div className='ml-auto gap-2 flex'>
            <button className='bg-slate-300 hover:bg-slate-400 text-lg p-2' onClick={prevProduct}>{<GrPrevious/>}</button>
            <button className='bg-slate-300 hover:bg-slate-400 text-lg p-2' onClick={nextProduct}>{<GrNext/>}</button>
          </div>
        </div>
        <div ref={sliderRef} className='flex gap-3 overflow-x-scroll scrollbar-none scroll-smooth transition-all'>
          {vegetablesList[0] ? vegetablesList.map(data => {
            return (
                <CardFeature
                key={data._id}
                name={data.name}
                price={data.price}
                description={data.description}
                image={data.Image}
                category={data.category}
              />
            )
          }):
            loadingVegArray.map(list => {
              return(<CardFeature loading="Loading..."/>)
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
