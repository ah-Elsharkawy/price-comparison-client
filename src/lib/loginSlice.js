import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// init state
const initialState = {
  isLoading: true,
  token: null,
  isError: null,
};

// login method send data to backend and get token
export const loginMethod = createAsyncThunk(
  "login/loginMethod",
  async (value) => {
    try {
      const res = await axios.post(`url`, value);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

const slice = createSlice({
  name: "login",
  initialState,
  // action || function
  extraReducers: (builder) => {
    builder.addCase(loginMethod.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
    });
    builder.addCase(loginMethod.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginMethod.rejected, (state, action) => {
      state.isLoading = false;
      state.token = null;
      state.isError = action.payload;
    });
  },
});

// initial state
export const loginReducer = slice.reducer;

// url
// validation
