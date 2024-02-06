import { NavItemsType } from "./types";

export const navItems: NavItemsType[] = [
    {
        title: "Home",
        active: true,
        activeIcon: "/icons/home-active.png",
        inactiveIcon: "/icons/home-inactive.png",
    },
    {
        title: "Mais vistas",
        active: false,
        activeIcon: "/icons/more-visited-active.png",
        inactiveIcon: "/icons/more-visited-inactive.png",
    },
    {
        title: "Mais curtidas",
        active: false,
        activeIcon: "/icons/more-liked-active.png",
        inactiveIcon: "/icons/more-liked-inactive.png",
    },
    {
        title: "Novas",
        active: false,
        activeIcon: "/icons/news-active.png",
        inactiveIcon: "/icons/news-inactive.png",
    },
    {
        title: "Surpreenda me",
        active: false,
        activeIcon: "/icons/surprise-me-inactive.png",
        inactiveIcon: "/icons/surprise-me-inactive.png",
    },
]