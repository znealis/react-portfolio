import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./compnents/About";
import Contact from "./compnents/Contact";
import Navbar from "./compnents/Navbar";
import Projects from "./compnents/Projects";
import Skills from "./compnents/Skills";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

