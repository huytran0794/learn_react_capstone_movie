import NavItem from "../Components/NavigationBar/NavItem/NavItem";
const NAV_MODE_HORIZONTAL = "horizontal";

const NAV_ITEMS_ARR = [
  {
    label: <NavItem toUrl="/">Movies</NavItem>,
    key: "home",
  },
  {
    label: <NavItem toUrl="/cinemas"> Cinemas </NavItem>,
    key: "cinemas",
  },
  {
    label: <NavItem toUrl="/news"> News </NavItem>,
    key: "news",
  },
];

export { NAV_MODE_HORIZONTAL, NAV_ITEMS_ARR };
