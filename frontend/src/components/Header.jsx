import { Link } from 'react-router-dom';
import logo from '../assets/cart.png';
import { HiShoppingCart } from 'react-icons/hi';
import {FaUserCircle} from 'react-icons/fa'

const Header = () => {
  return (
    <header className='shadow-md fixed w-full h-16 px-4 md:px-6'>
      <div className='flex items-center h-full justify-between'>
        <div className='flex items-center'>
          <Link to='/'>
            <div className='h-14'>
              <img src={logo} alt='logo' className='h-full' />
            </div>
          </Link>
          <Link to='/'>
            <span className='text-3xl text-orange-500 font-extrabold'>
              Shopiko
            </span>
          </Link>
        </div>

        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-7 text-base md:text-lg'>
            <Link to=''>Home</Link>
            <Link to='menu'>Menu</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
          </nav>
          <div className='text-orange-400 text-3xl'>{<HiShoppingCart />}</div>
          <div className='text-orange-400 text-3xl'>{<FaUserCircle />}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
