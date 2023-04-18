import { useState } from 'react';
import { Link } from 'react-router-dom';
import signUp from '../assets/signup.gif';
import { BiHide, BiShow } from 'react-icons/bi';
import toast, { Toaster } from 'react-hot-toast';

import {useFormik} from 'formik'
import * as Yup from 'yup';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const formik =  useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(3, 'Must be 3 characters or more').required('firstname is required'),
      lastName: Yup.string().required('lastname is required'),
      email: Yup.string().email('Invalid email address').required('email is required'),
      password: Yup.string().min(6, 'Password must be 6 characters long').required('password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'),null], 'Passwords must match..!')
    }),
    onSubmit: values => {
      toast('Successfully Registered...!', {
        icon: '👍',
        style: { backgroundColor: 'green', color: 'white' },
      });
      console.log(values);
    }
  })

  const handleShowPassword = e => {
    // e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = e => {
    // e.preventDefault();
    setConfirmPassword(!showConfirmPassword);
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
          <label htmlFor='firstname'>Firstname</label>
          <input
            type='text'
            id='firstname'
            name='firstName'
            className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 focus-within:outline-orange-500'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className='text-red-600  text-xl mb-2'>
              {formik.errors.firstName}
            </p>
          ) : null}

          <label htmlFor='lastname'>Lastname</label>
          <input
            type='text'
            id='lastname'
            name='lastName'
            className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 focus-within:outline-orange-500'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className='text-red-600  text-xl mb-2'>
              {formik.errors.lastName}
            </div>
          ) : null}

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

          <label htmlFor='confirmpassword'>confirm password</label>
          <div className='flex px-2 py-1 mt-1 mb-1 rounded bg-slate-200 items-center focus-within:outline focus-within:outline-orange-500'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirmPassword'
              name='confirmPassword'
              className='w-full mt-1 mb-1 px-2 py-1 rounded bg-slate-200 border-none outline-none'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {!showConfirmPassword ? (
              <span className='text-xl' onClick={handleShowConfirmPassword}>
                {<BiHide />}
              </span>
            ) : (
              <span className='text-xl' onClick={handleShowConfirmPassword}>
                {<BiShow />}
              </span>
            )}
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className='text-red-600 mb-2  text-xl'>
              {formik.errors.confirmPassword}
            </div>
          ) : null}

          <button
            type='submit'
            className='w-full max-w-[150px] m-auto bg-orange-500 hover:bg-orange-400 rounded-full cursor-pointer text-white text-xl font-medium text-center py-1 mt-4'
          >
            SignUp
          </button>
        </form>
        <p className='text-sm mt-3'>
          Already have an account ?{' '}
          <Link to='/login' className='text-orange-500 underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
