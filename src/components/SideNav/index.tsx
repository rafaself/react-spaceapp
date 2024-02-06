import NavItem from "./NavItem";
import { NavItemsType } from "./types";
import { navItems } from "./data"
import { StilizedList, StilizedSideNav } from "./styles"

const SideNav = () => {
  return (
    <>
      <StilizedSideNav>
        <StilizedList>
          {
            navItems.map((navItem: NavItemsType) =>
              <NavItem
                key={navItem.title}
                activeIcon={navItem.activeIcon}
                inactiveIcon={navItem.inactiveIcon}
                active={navItem.active}
              >
                {navItem.title}
              </NavItem>)
          }
        </StilizedList>
      </StilizedSideNav>
    </>)
}

export default SideNav;