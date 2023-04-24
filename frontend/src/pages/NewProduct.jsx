import React, { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import convertToBase64 from '../utils/convertToBase64';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NewProduct = () => {
  const [uploadedImage, setUploadImage] = useState();

  const formik = useFormik({
    initialValues: {
      name: '',
      category: '',
      price: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('name is required'),
      category: Yup.string().required('please select a category'),
      price: Yup.string().required('price is required'),
      description: Yup.string().required('description is required'),
    }),
    onSubmit: async values => {
      values = await Object.assign(values, {
        Image: uploadedImage || '',
      });
      console.log(values);
    },
  });

  const onUpload = async e => {
    const imageUrl = await convertToBase64(e.target.files[0]);
    setUploadImage(imageUrl);
  };

  return (
    <div className='p-4'>
      <form
        className=' m-auto w-full max-w-md flex flex-col shadow p-3 bg-white'
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          className='bg-slate-200 p-1 my-1'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className='text-red-600  text-xl mb-2'>{formik.errors.name}</p>
        ) : null}

        <label htmlFor='category'>Category</label>
        <select
          className='bg-slate-200 p-1 my-1'
          name='category'
          id='category'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        >
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Food items</option>
          <option>Meat</option>
        </select>

        {formik.touched.category && formik.errors.category ? (
          <p className='text-red-600  text-xl mb-2'>{formik.errors.category}</p>
        ) : null}

        <label htmlFor='image' className='cursor-pointer'>
          Image
          <div className='h-40 bg-slate-200 my-3 rounded w-full flex items-center justify-center'>
            <span className='text-5xl text-orange-500 '>
              {uploadedImage? <img src={uploadedImage} className='h-40 w-full'/> : <BsCloudUpload />}
            </span>
            <input
              type='file'
              id='image'
              accept='image/*'
              className='hidden'
              onChange={onUpload}
            />
          </div>
        </label>

        <label htmlFor='price'>Price</label>
        <input
          type='text'
          name='price'
          id='price'
          className='bg-slate-200 p-1 my-1'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />

        {formik.touched.price && formik.errors.price ? (
          <p className='text-red-600  text-xl mb-2'>{formik.errors.price}</p>
        ) : null}

        <label htmlFor='description'>Description</label>
        <textarea
          rows={2}
          className='bg-slate-200 p-1 my-1 resize-none'
          id='description'
          name='description'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        ></textarea>

        {formik.touched.description && formik.errors.description ? (
          <p className='text-red-600  text-xl mb-2'>
            {formik.errors.description}
          </p>
        ) : null}

        <button type='submit' className='text-lg bg-orange-500 font-medium my-2 rounded-sm text-white hover:bg-orange-400 shadow-sm'>
          Save
        </button>

      </form>
    </div>
  );
};

export default NewProduct;
