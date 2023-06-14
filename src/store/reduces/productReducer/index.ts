import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaginationType, ProductType } from '../../../shared/types/types';

interface ProductStore {
  products: ProductType[];
  searchProducts?: PaginationType<ProductType[]>;
}

const initialState: ProductStore = {
  products: [],
  searchProducts: undefined,
};

export const productSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },

    setSearchProductsAction: (state, action: PayloadAction<PaginationType<ProductType[]>| undefined>) => {
      state.searchProducts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductsAction, setSearchProductsAction } = productSlice.actions;

export default productSlice.reducer;
