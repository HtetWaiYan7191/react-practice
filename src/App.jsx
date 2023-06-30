import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Product from "./components/Product";
import "./App.css";
import Navbar from "./components/Navbar";
import AddProductForm from "./components/AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchApi = async() => {
    const api = await fetch('https://fakestoreapi.com/products/');
    const data = await api.json();
    console.log("use effect running")
    setProducts(data)
  };

 useEffect( () => {fetchApi()}, []);


  return (
    <>
    <Navbar></Navbar>
      <h1 className="main-title my-5">Welcome To My React App</h1>
      <div className="card-container">
      <AddProductForm products={products} setProducts={setProducts}></AddProductForm>
      <Product products={products}></Product>
      </div>

      </>
  );
};

export default App;
