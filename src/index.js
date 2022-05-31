import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { Table } from "./Components/Table/test";
//import SideBar from "./Components/Navbar/Navsidebar";
//import PageD from "./Components/test";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Suspense fallback="Loading...">
            <App />
        </Suspense>
    </React.StrictMode>
);
