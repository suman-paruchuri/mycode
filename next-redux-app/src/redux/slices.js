// src/redux/slices.js
import { createSlice } from '@reduxjs/toolkit';

// Example counter slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export actions for use in components
export const { increment, decrement, reset } = counterSlice.actions;

// Export the reducer to be included in the store
export default counterSlice.reducer;

