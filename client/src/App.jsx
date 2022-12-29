import React from "react";
import "./style.scss"
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
