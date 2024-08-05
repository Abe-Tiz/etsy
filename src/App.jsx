// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Product from "./components/Product";

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
