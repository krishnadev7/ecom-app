import signUp from '../assets/signup.gif';
import { BiHide, BiShow } from 'react-icons/bi';

const Signup = () => {
  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex flex-col items-center p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>SignUp</h1> */}
        <div className='w-20 overflow-hidden drop-shadow-md shadow-md rounded-full '>
          <img src={signUp} alt='' className='w-full' />
        </div>
        <form className='w-full py-3' autoComplete='off'>
          <label htmlFor='firstname'>Firstname</label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 focus-within:outline-orange-500'
          />

          <label htmlFor='firstname'>Lastname</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 focus-within:outline-orange-500'
          />
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 focus-within:outline-orange-500'
          />
          <label htmlFor='password'>password</label>
          <div className='flex px-2 py-1 mt-1 mb-1 rounded bg-slate-200 items-center outline focus-within:outline-orange-500'>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 border-none outline-none'
            />
            <span className='text-xl'>{<BiHide />}</span>
            <span className='text-xl'>{<BiShow />}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
