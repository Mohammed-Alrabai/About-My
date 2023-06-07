import React from "react";
import Navbar from "./componant/Navbar";
import Footer from "./componant/Footer";
import Home from "./componant/Home";
import AboutMy from "./componant/AboutMy";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
