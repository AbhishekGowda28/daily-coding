import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: number
}

export const calculatorSlice = createSlice({
  name: 'calc',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state: InitialState) => {
      state.value += 1;
    },
    decrement: (state: InitialState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: InitialState, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = calculatorSlice.actions;

export const incrementAsync = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state: any) => state.calc.value;

export default calculatorSlice.reducer;
