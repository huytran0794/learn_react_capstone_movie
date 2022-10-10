/* import packages */
import React from "react";
import { useLocation } from "react-router-dom";

/* import global components */
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Layout({
  HeaderComponent = Header,
  BodyComponent,
  FooterComponent = Footer,
}) {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <HeaderComponent />
      )}
      <main className="py-10">
        <BodyComponent />
      </main>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <FooterComponent />
      )}
    </>
  );
}
