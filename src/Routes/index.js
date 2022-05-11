import { lazy } from "react";

const Home = lazy(() => import("../Screens/Home/Home"));

const screens = [
  {
    component: Home,
    path: "/home",
  },
];

export default screens;
