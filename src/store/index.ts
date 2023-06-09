import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './reduces/globalReducer';
import userReducer from './reduces/userReducer';
import productReducer from './reduces/productReducer';

const store = configureStore({
  reducer: {
    userReducer,
    globalReducer,
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
