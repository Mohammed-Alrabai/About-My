import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutMy from "./AboutMy";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Card from "./Card";
import CallBlog from "./CallBlog";
function Home() {
  return (
    <>
      <Hero />
      <Card />
      <CallBlog />
    </>
  );
}

export default Home;
