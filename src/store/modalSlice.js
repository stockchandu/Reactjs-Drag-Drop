import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { modal: false },
  reducers: {
    handleModal: (state, action) => {
        state.modal = action.payload;
    },
  },
});

export const { handleModal } = modalSlice.actions;
export default modalSlice.reducer;
