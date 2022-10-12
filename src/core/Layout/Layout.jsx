/* import packages */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

/* import global components */
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";

export default function Layout() {
  let location = useLocation();
  const selectBannerComponent = (pathname) => {
    console.log(pathname);
    if (pathname === "movies/book-ticket/:scheduleId") {
      console.log("Banner for booking page");
    }
  };
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header />
      )}
      <main>
        {/* <Banner className="h-[75vh]" pageLocation={location.pathname} /> */}
        {selectBannerComponent(location.pathname)}
        <Outlet />
      </main>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </>
  );
}
