/* import packages */
import React, { useEffect, useState } from "react";

/* import local component */
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import NavigationBar from "../NavigationBar/NavigationBar";
import UserAccountNav from "../NavigationBar/UserNavBar/UserAccountNav";
import { MAIN_NAV_DATA } from "../../constant/Nav.data";

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setIsScrolling(true);
      }
    });
  });
  let headerWrapClass = `sticky top-0 z-10 shadow-xl shadow-indigo-400/70 ${
    isScrolling ? "bg-[#1b2130]" : ""
  }`;
  console.log("rendering header");
  return (
    <header className={headerWrapClass}>
      <Container>
        <div className="py-5 flex justify-between items-center">
          <Logo />
          <NavigationBar
            mode={MAIN_NAV_DATA.mode}
            menuItems={MAIN_NAV_DATA.item}
          />
          <UserAccountNav />
        </div>
      </Container>
    </header>
  );
}
