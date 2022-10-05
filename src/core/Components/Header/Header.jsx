/* import packages */
import React from "react";

/* import local component */
import NavigationBar from "../NavigationBar/NavigationBar";
import Logo from "../Logo/Logo";
import UserAccountNav from "../NavigationBar/UserNavBar/UserAccountNav";
import { NAV_MODE_HORIZONTAL, NAV_ITEMS_ARR } from "../../constant/Nav.data";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import Container from "../Container/Container";
export default function Header() {
  let headerWrapClass = `sticky top-0 z-10 shadow-2xl	shadow-indigo-500/50`;
  return (
    <header className={headerWrapClass}>
      <Container>
        <FlexWrapper align="center" justity="between" className="py-5">
          <Logo />
          <NavigationBar mode={NAV_MODE_HORIZONTAL} menuItems={NAV_ITEMS_ARR} />
          <UserAccountNav />
        </FlexWrapper>
      </Container>
    </header>
  );
}
