import { configureStore } from '@reduxjs/toolkit';

import globalReducer from './reduces/globalReducer';
import userReducer from './reduces/userReducer';

const store = configureStore({
  reducer: {
    userReducer,
    globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
