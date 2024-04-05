import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import { ref, child, get } from "firebase/database";
import { database } from "../../firebase/config";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const getPsycologists: AsyncThunk<any[], void, object> = createAsyncThunk(
  "psychologists/fetchPsychologists",
  async (_, thunkAPI) => {
    const dbRef = ref(database);

    try {
      const snapshot = await get(child(dbRef, "/"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        
        if (data) {
          const allPsycologists = Object.values(data);
          console.log(allPsycologists);
          return allPsycologists;
        } else {
          Notify.warning("No data available");
          return [];
        }
      } else {
        Notify.warning("No data available");
        return [];
      }
    } catch (error) {
      console.error(error);
      Notify.failure(`${error}`);
      throw error; // Rethrow the error to handle it in the Redux state
    }
  }
);
