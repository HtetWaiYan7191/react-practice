import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";;
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

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
    <Routes>
    <Route path='/' element ={<Home products={products} setProducts={setProducts}/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    </Routes>

      </>
  );
};

export default App;
