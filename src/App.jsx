import React from "react";
import { Route, Routes } from "react-router-dom";

import "./app.scss";

import MainLayout from "./layout/MainLayout";
import Main from "./pages/Main";
import User from "./pages/User";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<User />} />
      </Route>
    </Routes>
  );
};

export default App;
