import { lazy } from "react";

const Home = lazy(() => import("../Screens/Home/Home"));
const PageA = lazy(() => import("../Screens/PageA/PageA"));

const screens = [
  {
    component: Home,
    path: "/",
  },
  {
    component: PageA,
    path: "/pageA",
  },
];

export default screens;
