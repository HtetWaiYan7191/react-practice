import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "./App.css";

const App = () => {
  const name = "Htet Wai Yan";
  return (
    <>
      <h1>Welcome To My React App</h1>
      <Home userName = {name}></Home>
      </>
  );
};

export default App;
