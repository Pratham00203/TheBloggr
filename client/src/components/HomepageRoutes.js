import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Feed from "./Feed";
import BlogFrom from "./BlogForm";
import Dashboard from "./Dashboard";
import Blog from "./Blog";

function HomepageRoutes() {
  return (
    <Router>
      <Navbar />
      <section id='main'>
        <Routes></Routes>
      </section>
      <Footer />
    </Router>
  );
}

export default HomepageRoutes;
