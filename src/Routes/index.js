import { lazy } from "react";

const Home = lazy(() => import("../Screens/Home/Home"));
const PageA = lazy(() => import("../Screens/PageA/PageA"));
const PageB = lazy(() => import("../Screens/PageB/PageB"));
const PageC = lazy(() => import("../Screens/PageC/PageC"));
const PageD = lazy(() => import("../Screens/PageD/PageD"));

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
    {
        component: PageC,
        path: "/PageC",
    },{
        component: PageD,
        path: "/PageD",
    },
];

export default screens;
