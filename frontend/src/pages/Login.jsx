import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signUp from '../assets/signup.gif';
import { BiHide, BiShow } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';
import { LogIn } from '../utils/helper';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('email is required'),
      password: Yup.string()
        .min(6, 'Password must be 6 characters long')
        .required('password is required'),
    }),

    onSubmit: async values => {
      LogIn(values)
        .then(data => {
          toast.success(data.msg);
        })
        .then(data =>
          setTimeout(() => {
            navigate('/');
          }, 3000)
        );
      console.log(values);
    },
  });

  const handleShowPassword = e => {
    // e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className='p-3 md:p-4'>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='w-full max-w-sm bg-white m-auto flex flex-col items-center p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>SignUp</h1> */}
        <div className='w-20 overflow-hidden drop-shadow-md shadow-md rounded-full '>
          <img src={signUp} alt='' className='w-full' />
        </div>

        <form
          className='w-full py-3 flex flex-col'
          autoComplete='off'
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 focus-within:outline-orange-500'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='text-red-600 mb-2  text-xl'>
              {formik.errors.email}
            </div>
          ) : null}

          <label htmlFor='password'>password</label>
          <div className='flex px-2 py-1 mt-1 mb-1 rounded bg-slate-200 items-center focus-within:outline focus-within:outline-orange-500'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 border-none outline-none'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {!showPassword ? (
              <span className='text-xl' onClick={handleShowPassword}>
                {<BiHide />}
              </span>
            ) : (
              <span className='text-xl' onClick={handleShowPassword}>
                {<BiShow />}
              </span>
            )}
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className='text-red-600 mb-2 text-xl'>
              {formik.errors.password}
            </div>
          ) : null}

          <button
            type='submit'
            className='w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-400 rounded-full cursor-pointer text-white text-xl font-medium text-center py-1 mt-4'
          >
            Login
          </button>
        </form>
        <p className='text-sm mt-3'>
          Don't have an account ?{' '}
          <Link to='/signup' className='text-orange-500 underline'>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
