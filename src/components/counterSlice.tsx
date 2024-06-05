import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    setCount: (_, action) => action.payload
  }
});

export const { setCount } = counterSlice.actions;
export default counterSlice.reducer;