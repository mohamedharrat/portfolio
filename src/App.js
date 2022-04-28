import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Notfound from "./pages/Notfound";
import Experience from "./components/Experience";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competences" element={<Knowledges />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
