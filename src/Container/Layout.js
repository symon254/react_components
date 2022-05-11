import React, { Suspense } from "react";
import { Route, Routes, red } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import screens from "../Routes";

const layout = () => {
  return (
    <>
      <Navbar />

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
          ) : "null";
        })}
      </Routes>
    </>
  );
};

export default layout;
