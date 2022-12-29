import React from "react";
import "./style.scss"
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
