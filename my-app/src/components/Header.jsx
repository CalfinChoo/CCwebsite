import React, { useRef, useState } from "react";

function Header() {
  const [logo, setLogo] = useState("transition-all duration-300 text-white");
  const ref = useRef();

  const toggleMenu = (isClosing = false) => {
    if (ref) {
      if (ref.current.classList.contains("hidden") && !isClosing) {
        ref.current.classList.remove("hidden");
      } else {
        ref.current.classList.add("hidden");
      }
    }
  };

  return (
    <header className="flex justify-around py-8 sticky top-0 bg-c-purple border-b-2 border-b-c-ruby items-center z-50">
      <a
        className="font-bold text-2xl flex items-end font-playwrite"
        href="/portfolio"
        onMouseOver={() => setLogo("transition-all duration-300 text-c-ruby")}
        onMouseOut={() => setLogo("transition-all duration-300 text-white")}
      >
        <span className="text-4xl text-c-ruby">C</span>
        <span className={logo + " mr-1"}>alvin</span>
        <span className="text-4xl text-c-ruby">C</span>
        <span className={logo}>hu</span>
      </a>
      <nav className="flex items-center justify-between flex-wrap">
        <div className="lg:hidden">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-white border-c-ruby hover:text-c-ruby hover:border-white"
            onClick={() => toggleMenu()}
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Open Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full block flex-grow absolute top-105 right-0 lg:bg-inherit bg-c-black-transparent-75 hidden lg:flex lg:items-center lg:w-auto lg:static"
          id="nav-content"
          ref={ref}
        >
          <ul className="flex flex-row lg:space-x-7 font-arimo flex-col lg:flex-row">
            <li>
              <a
                href="#about"
                className="block lg:mt-3 lg:inline-block lg:mt-0 text-white hover:text-c-ruby transition-all duration-300 lg:py-0 py-4 text-center lg:hover:bg-inherit hover:bg-c-white-transparent-10"
                onClick={() => toggleMenu(true)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="block lg:mt-3 lg:inline-block lg:mt-0 text-white hover:text-c-ruby transition-all duration-300 lg:py-0 py-4 text-center lg:hover:bg-inherit hover:bg-c-white-transparent-10"
                onClick={() => toggleMenu(true)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block lg:mt-3 lg:inline-block lg:mt-0 text-white hover:text-c-ruby transition-all duration-300 lg:py-0 py-4 text-center lg:hover:bg-inherit hover:bg-c-white-transparent-10"
                onClick={() => toggleMenu(true)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block lg:mt-3 lg:inline-block lg:mt-0 text-white hover:text-c-ruby transition-all duration-300 lg:py-0 py-4 text-center lg:hover:bg-inherit hover:bg-c-white-transparent-10"
                onClick={() => toggleMenu(true)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block lg:mt-3 lg:inline-block lg:mt-0 text-white hover:text-c-ruby transition-all duration-300 lg:py-0 py-4 text-center lg:hover:bg-inherit hover:bg-c-white-transparent-10"
                onClick={() => toggleMenu(true)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block lg:mt-3 lg:inline-block lg:mt-0 text-white hover:text-c-ruby transition-all duration-300 lg:py-0 py-4 text-center lg:hover:bg-inherit hover:bg-c-white-transparent-10"
                onClick={() => toggleMenu(true)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
