import { createSlice } from '@reduxjs/toolkit';
import {getPsycologists} from "./psycologistOperations"


interface PsychologistState {
  data: object[]; 
  loading: boolean;
  error: string | null | undefined; 
}

const initialState: PsychologistState = {
  data: [],
  loading: false,
  error: null,
};


const psychologistsSlice = createSlice({
  name: 'psychologist',
  initialState,
  reducers: {
    // Additional reducers can go here
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPsycologists.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPsycologists.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPsycologists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default psychologistsSlice.reducer;
