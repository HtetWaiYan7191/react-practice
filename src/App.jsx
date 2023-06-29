import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Product from "./components/Product";
import "./App.css";

const App = () => {
  
  return (
    <>
      <h1 className="main-title">Welcome To My React App</h1>
      <div className="card-container row row-cols-3 gx-2 gy-4">
      <Product></Product>
      </div>

      </>
  );
};

export default App;
