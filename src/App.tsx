import React from 'react';
import {Home} from "./pages/Home/Home";
import {Psychologists} from "./pages/Psychologists/Psychologists";
import {Favorite} from "./pages/Favorites/Favorites"
import { BrowserRouter as Routes, Route, Navigate} from 'react-router-dom';

export const App = () => {
    return (
      <Routes>
      {/* <Route path="/" element={<SharedLayout />}> */}
        <Route index element={<Home />} />
        <Route
          path="/phycologist"
          element={<Psychologists/>}
        />
        <Route
          path="favorite"
          element={<Favorite/>}
        />
        <Route path="*" element={<Navigate to="/" />} />
      {/* </Route> */}
    </Routes>

  );
};