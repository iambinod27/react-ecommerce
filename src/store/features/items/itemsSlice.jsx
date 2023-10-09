import { createSlice } from "@reduxjs/toolkit";
import { getAllItems } from "../../actions/items/itemsActions";

const initialState = {
  isLoading: true,
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })
      .addCase(getAllItems.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

export default productSlice.reducer;
