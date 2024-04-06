import React, { useEffect } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Psychologists } from "./pages/Psychologists/Psychologists";
import { Favorite } from "./pages/Favorites/Favorites";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { login } from './redux/Auth/authSlice';

export const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({ uid: user.uid, email: user.email }));
      }
    });
    return () => unsubscribe();
  }, [dispatch, auth]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route 
          path="/psychologists" 
          element={
            <Psychologists />
          }
        />
        <Route 
          path="/favorites" 
          element={
            <PrivateRoute><Favorite /></PrivateRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
