import { createSlice } from '@reduxjs/toolkit';
import { ReduxTypes } from '@/types';

const initialState = {
  exampleMode: ReduxTypes.EXAMPLE,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    getExample: (state) => {
      return state;
    },
  },
});

export const { getExample } = exampleSlice.actions;
export default exampleSlice.reducer;
