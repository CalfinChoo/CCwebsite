import React, { useState } from "react";

function Header() {
  const [logo, setLogo] = useState("transition-all duration-300 text-white");
  return (
    <header className="flex justify-around py-9 sticky top-0 bg-c-purple border-b-2 border-b-c-ruby items-center z-50">
      <a
        className="font-bold text-2xl flex items-end font-playwrite"
        href="/portfolio"
        onMouseOver={() => setLogo("transition-all duration-300 text-c-ruby")}
        onMouseOut={() => setLogo("transition-all duration-300 text-white")}
      >
        <span className="text-3xl text-c-ruby">C</span>
        <span className={logo + " mr-1"}>alvin</span>
        <span className="text-3xl text-c-ruby">C</span>
        <span className={logo}>hu</span>
      </a>
      <nav className="flex">
        <ul className="flex flex-row space-x-7 font-arimo">
          <li>
            <a
              href="#about"
              className="transition-all"
              onMouseOver={({ target }) => (target.style.color = "#E0115F")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="transition-all"
              onMouseOver={({ target }) => (target.style.color = "#E0115F")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="transition-all"
              onMouseOver={({ target }) => (target.style.color = "#E0115F")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-all"
              onMouseOver={({ target }) => (target.style.color = "#E0115F")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="transition-all"
              onMouseOver={({ target }) => (target.style.color = "#E0115F")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-all"
              onMouseOver={({ target }) => (target.style.color = "#E0115F")}
              onMouseOut={({ target }) => (target.style.color = "white")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
