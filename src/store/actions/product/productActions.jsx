import { createAsyncThunk } from "@reduxjs/toolkit";
import eAxios from "../../../axios/axios";

export const getAllItems = createAsyncThunk(
  "api/getAllItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await eAxios.get("/products");
      const data = await res.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
