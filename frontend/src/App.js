import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Modules from "./components/Modules";
import CitizenBrief from "./components/CitizenBrief";
import Contact from "./components/Contact";
import Demo from "./components/Demo";
import WarSimulation from "./components/WarSimulation";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App bg-brain-black min-h-screen">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/citizen-brief" element={<CitizenBrief />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/war-simulation" element={<WarSimulation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;