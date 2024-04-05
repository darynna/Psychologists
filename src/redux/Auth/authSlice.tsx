import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
   user: {
    uid: string;
    email: string | null;
  } | null; // Adjust the type according to your user data structure
  favoriteArray: string[]; // Assuming favoriteArray contains string items
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  favoriteArray: [],
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
      state.favoriteArray = [];
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favoriteArray.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favoriteArray = state.favoriteArray.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { login, logout, addToFavorites, removeFromFavorites } = authSlice.actions;

export default authSlice.reducer;
