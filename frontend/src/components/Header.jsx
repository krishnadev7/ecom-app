import { Link } from 'react-router-dom';
import logo from '../assets/cart.png';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRedux } from '../redux/userSlice';
import {toast} from 'react-hot-toast';

const Header = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const {user} = useSelector((state)=>state.user);
  console.log(user);

  const handleChangeMenu = e => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const handleLogout = ()  => {
      dispatch(logoutRedux())
      toast.success("Logout successfully..!")
  }

  return (
    <header className='shadow-md fixed w-full h-16 px-4 md:px-6 z-50 bg-white'>
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
          <div className='text-orange-400 text-3xl relative'>
            {<HiShoppingCart />}
            <div className='absolute -top-2 -right-1 h-5 w-5 m-0 p-0 text-sm text-center text-white bg-red-500 rounded-full'>
              2
            </div>
          </div>
          <div
            className='text-orange-400 text-3xl cursor-pointer  '
            onClick={handleChangeMenu}
          >
            {user.profileImage ? (
              <img
                src={user.profileImage}
                className='w-10 h-10 rounded-full overflow-hidden drop-shadow-md'
              />
            ) : (
              <FaUserCircle />
            )}
            {showMenu && (
              <div className='absolute right-2 text-lg text-black bg-white shadow drop-shadow-md py-2 px-2'>
                <Link to='newproduct'>
                  <p className='whitespace-nowrap cursor-pointer'>
                    New Product
                  </p> 
                </Link>
                {user._id != '' ? (
                  <Link to='login'>
                    <p className='whitespace-nowrap cursor-pointer bg-red-500 hover:bg-red-400 text-white rounded-md text-center mt-1' onClick={handleLogout}>Logout</p>
                  </Link>
                ) : (
                  <Link to='login'>
                    <p className='whitespace-nowrap cursor-pointer'>Login</p>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
