import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserDetail = createAsyncThunk("users/getDetailUsers", async (id) => {
  const response = await axios.get(`https://reqres.in/api/users/${id}`);
  return response.data;
});

const getUserDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    userDetail: [],
    loading: false,
  },
  extraReducers: {
    [getUserDetail.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.userDetail = action.payload;
    },
    [getUserDetail.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default getUserDetailSlice.reducer;
