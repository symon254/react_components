import React, { Suspense } from "react";
import { Route, Routes, red } from "react-router-dom";
//import { Navbar } from "../Components/Navbar/Navbar";
import SideBar from "../Components/Navbar/Navsidebar";
import screens from "../Routes";

const layout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <SideBar />
            <div className="content-wrapper">
                <div className="container mt-5 mb-3">
                    <Routes>
                        {screens.map((item, i) => {
                            return item.component ? (
                                <Route
                                    exact
                                    key={i}
                                    path={item.path}
                                    element={
                                        <Suspense fallback="Loading...">
                                            <item.component />
                                        </Suspense>
                                    }
                                />
                            ) : (
                                "null"
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default layout;
