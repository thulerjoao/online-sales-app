import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../../shared/types/types';

interface ProductStore {
  products: ProductType[];
}

const initialState: ProductStore = {
  products: [],
};

export const productSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductsAction } = productSlice.actions;

export default productSlice.reducer;
