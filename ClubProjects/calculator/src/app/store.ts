import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/calculator/calculatorSlice';

export default configureStore({
  reducer: {
    calc: counterReducer,
  },
});
