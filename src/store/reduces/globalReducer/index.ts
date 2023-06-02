import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GlobalModalType } from '../../../shared/components/modal/globalModal';

interface ClobalStore {
  modal: GlobalModalType;
}

const initialState: ClobalStore = {
  modal: {
    visible: false,
    text: '',
    title: '',
  },
};

export const globalSlice = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setModalAction: (state, action: PayloadAction<GlobalModalType>) => {
      state.modal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModalAction } = globalSlice.actions;

export default globalSlice.reducer;
