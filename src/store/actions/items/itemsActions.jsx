import { createAsyncThunk } from "@reduxjs/toolkit";
import eAxios from "../../../axios/axios";

export const getAllItems = createAsyncThunk("api/getAllItems", async () => {
  try {
    const res = await eAxios.get("/products");
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
});
