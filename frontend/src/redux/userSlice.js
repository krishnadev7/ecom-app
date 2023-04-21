import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    profileImage: "",
    _id: ""
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRedux: (state, action) => {
    //   console.log(action);
      state.user._id = action.payload.data._id,
      state.user.email = action.payload.data.email,
      state.user.firstName = action.payload.data.firstName,
      state.user.lastName = action.payload.data.lastName,
      state.user.profileImage = action.payload.data.profileImage
    },
  },
});

export const { loginRedux } = userSlice.actions;
export default userSlice.reducer;
