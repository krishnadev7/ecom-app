import { useState } from 'react'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


function App() {

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

export default App
