import { lazy } from "react";

const Home = lazy(() => import("../Screens/Home/Home"));
const PageA = lazy(() => import("../Screens/PageA/PageA"));
const PageB = lazy(() => import("../Screens/PageB/PageB"));

const screens = [
    {
        component: Home,
        path: "/",
    },
    {
        component: PageA,
        path: "/pageA",
    },
    {
        component: PageB,
        path: "/PageB",
    },
];

export default screens;
