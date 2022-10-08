/* import packages */
import React from "react";
import { Route, Routes } from "react-router-dom";

/* import local components */
import Home from "./Pages/Home/Home";
import MovieDetailPage from "./Pages/MovieDetailPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Layout from "./core/Layout/Layout";

export default function Routes() {
  return (
    <>
      <Route path="/" element={LayoutComponent(Home)} />
      <Route path="/login" element={LayoutComponent(LoginPage)} />
      <Route path="/register" element={LayoutComponent(RegisterPage)} />
      <Route
        path="/movies/detail/:id"
        element={LayoutComponent(MovieDetailPage)}
      />
    </>
  );
}
