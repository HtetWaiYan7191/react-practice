import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Product from "./components/Product";
import "./App.css";

const App = () => {
  
  return (
    <>
      <h1 className="main-title">Welcome To My React App</h1>
      <Product></Product>
      </>
  );
};

export default App;
