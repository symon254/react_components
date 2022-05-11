import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Container/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
};

export default App;
