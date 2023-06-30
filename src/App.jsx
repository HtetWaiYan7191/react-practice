import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Product from "./components/Product";
import "./App.css";
import Navbar from "./components/Navbar";
import AddProductForm from "./components/AddProductForm";

const App = () => {
  
  return (
    <>
    <Navbar></Navbar>
      <h1 className="main-title my-5">Welcome To My React App</h1>
      <div className="card-container">
      <AddProductForm></AddProductForm>
      <Product></Product>
      </div>

      </>
  );
};

export default App;
