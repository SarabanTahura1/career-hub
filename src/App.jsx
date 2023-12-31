import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
