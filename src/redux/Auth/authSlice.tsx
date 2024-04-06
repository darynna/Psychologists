import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Psychologist } from '../../redux/Psycologists/psycologistOperations';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    uid: string;
    email: string | null;
  } | null;
  favoritePsychologists: Psychologist[];
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  favoritePsychologists: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ uid: string; email: string | null }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.favoritePsychologists = [];
    },
    addToFavorites: (state, action: PayloadAction<Psychologist>) => {
      state.favoritePsychologists.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favoritePsychologists = state.favoritePsychologists.filter(
        (psychologist) => String(psychologist.id) !== action.payload
      );
    },
  },
});

export const { login, logout, addToFavorites, removeFromFavorites } = authSlice.actions;

export default authSlice.reducer;
