/* import packages */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

/* import global components */
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";

export default function Layout() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <main>
        {location.pathname !== "/profile" && (
          <Banner className="h-[40vh]" pageLocation={location.pathname} />
        )}
        <Outlet />
      </main>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
}
