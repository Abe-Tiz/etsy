// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Card from './components/Card';

 
const App = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Card />
    </div>
  );
};

export default App;
