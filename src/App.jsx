// src/App.js
import React from "react";
import Navbar from "../etsy1/src/components/Navbar";
import Card from "../etsy1/src/components/Card";
import Product from "../etsy1/src/components/Product";

const App = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Card />
      <Product />
    </div>
  );
};

export default App;
