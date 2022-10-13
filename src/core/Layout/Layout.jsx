/* import packages */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

/* import global components */
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Layout() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
}
