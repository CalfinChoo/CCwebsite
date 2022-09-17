import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="text-white bg-c-purple min-w-[900px] font-sans">
      <Header />
      <About />
      <div className="flex justify-center">
        <hr className="w-72" />
      </div>
      <Education />
      <div className="flex justify-center">
        <hr className="w-72" />
      </div>
      <Experience />
      <div className="flex justify-center">
        <hr className="w-72" />
      </div>
      <Projects />
      <div className="flex justify-center">
        <hr className="w-72" />
      </div>
      <Skills />
      <div className="flex justify-center">
        <hr className="w-72" />
      </div>
      <Contact />
    </div>
  );
}

export default App;
