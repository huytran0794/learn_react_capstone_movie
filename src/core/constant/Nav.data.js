/* import local components */
import NavItem from "../Components/NavigationBar/NavItem/NavItem";
import UserNavItem from "../Components/NavigationBar/NavItem/UserNavItem";

const MAIN_NAV_DATA = [
  {
    label: <NavItem toUrl="/">Movies</NavItem>,
    key: "home",
  },
  {
    label: <NavItem toUrl="/cinemas"> Cinemas </NavItem>,
    key: "cinemas",
  },
];

/* user nav data */
const USER_NAV_DATA = [
  {
    label: <UserNavItem toUrl="/">Sign in</UserNavItem>,
    key: "signin",
  },
  {
    label: <UserNavItem toUrl="/cinemas"> Sign up </UserNavItem>,
    key: "signup",
  },
];

export { MAIN_NAV_DATA, USER_NAV_DATA };
