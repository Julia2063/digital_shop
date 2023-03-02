/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/Phone';

export interface CartState {
  phones: Phone[],
}

const initialState: CartState = {
  phones: [],
};

const cartSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Phone[]>) => {
      state.phones = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { set } = cartSlice.actions;
