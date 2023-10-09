import { createSlice } from "@reduxjs/toolkit";
import { getAllItems } from "../../actions/product/productActions";

const initialState = {
  isLoading: true,
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getAllItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productSlice.reducer;
