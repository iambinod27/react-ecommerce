import { createSlice } from "@reduxjs/toolkit";
import { getAllItems } from "../../actions/items/itemsAction";

const initialState = {
  isLoading: true,
  items: [],
};

const itemState = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllItems.pending]: (state) => {
      state.isLoading = true;
    },

    [getAllItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...payload];
    },

    [getAllItems.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default itemState.reducer;
