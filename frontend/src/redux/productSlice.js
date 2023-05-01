import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
};

export const productSliceReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      console.log(action);
      state.productList = [...action.payload]
    },
  },
});

export const { setDataProduct } = productSliceReducer.actions;

export default productSliceReducer.reducer;
