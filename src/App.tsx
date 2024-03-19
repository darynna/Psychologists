import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Psychologists } from "./pages/Psychologists/Psychologists";
import { Favorite } from "./pages/Favorites/Favorites";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/psychologist" element={<Psychologists />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};