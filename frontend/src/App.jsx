import { useEffect, useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setDataProduct } from './redux/productSlice';

function App() {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.product);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/product`);
      const resData = await res.json();
      dispatch(setDataProduct(resData));
    })();
  }, []);
    console.log(productData);
  return (
    <div>
      <Header />
      <Toaster position='top-center' reverseOrder={false} />
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
