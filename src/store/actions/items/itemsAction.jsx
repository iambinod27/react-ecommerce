import { createAsyncThunk } from "@reduxjs/toolkit";
import eAxios from "../../../axios/axios";

export const getAllItems = createAsyncThunk(
  "api/getAllItems",
  async (payload, thunkAPI) => {
    try {
      const res = await eAxios.get("/products");
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
