/* import packages */
import React from "react";

/* import local component */
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import NavigationBar from "../NavigationBar/NavigationBar";
import UserAccountNav from "../NavigationBar/UserNavBar/UserAccountNav";
import { MAIN_NAV_DATA } from "../../constant/Nav.data";

export default function Header() {
  let headerWrapClass =
    "sticky top-0 z-10 bg-[#1b2130] border-b border-solid border-slate-400/40 shadow-sm shadow-indigo-700";
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
