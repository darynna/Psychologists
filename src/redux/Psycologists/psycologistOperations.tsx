import { createAsyncThunk} from "@reduxjs/toolkit";
import { ref, child, get } from "firebase/database";
import { database } from "../../firebase/config";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

type Review = {
  reviewer: string;
  rating: number;
  comment: string;
};

export type Psychologist = {
    id: number;
  name: string;
  avatar_url: string;
  experience: string;
  reviews: Review[];
  price_per_hour: number;
  rating: number;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
};

type GetPsycologistsReturnType = Psychologist[];

export const getPsycologists= createAsyncThunk<
  GetPsycologistsReturnType,
  void
>(
  "psychologists/fetchPsychologists",
  async (_, thunkAPI) => {
    const dbRef = ref(database);

    try {
      const snapshot = await get(child(dbRef, "/"));

      if (snapshot.exists()) {
        const data: { [key: string]: Psychologist } = snapshot.val();
        
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
