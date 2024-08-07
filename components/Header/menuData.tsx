import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 5,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "NICE1",
        path: "https://www.nicerecovery.com/",
        newTab: false,
      },
      {
        id: 52,
        title: "T-REX",
        path: "https://trexrehab.com/",
        newTab: false,
      },
      {
        id: 53,
        title: "OnLux",
        path: "https://onluxmd.com/",
        newTab: false,
      },
      {
        id: 54,
        title: "NS100",
        path: "https://neurosolutions100.com/",
        newTab: false,
      }
    ],
  },
];
export default menuData;
