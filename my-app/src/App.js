import photo from "./static/media/photo.jpg";
import p0 from "./static/media/p0.PNG";
import p1 from "./static/media/p1.PNG";
import p2 from "./static/media/p2.PNG";
import py from "./static/media/python.svg";
import cpp from "./static/media/cpp.svg";
import html from "./static/media/html.svg";
import css from "./static/media/css.svg";
import js from "./static/media/js.svg";
import c from "./static/media/c.svg";
import sql from "./static/media/sql.svg";
import asm from "./static/media/asm.svg";
import java from "./static/media/java.svg";
import windows from "./static/media/windows.svg";
import linux from "./static/media/linux.png";
import { FaGraduationCap, FaUniversity, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [color0, setColor0] = useState("white");
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");

  return (
    <div className="text-white bg-c-purple min-w-[900px]">
      <header className="flex justify-around py-9 sticky top-0 bg-c-purple border-b-2 border-b-c-ruby items-center z-50">
        <span className="font-bold text-2xl italic">Calvin Chu</span>
        <nav className="flex">
          <ul className="flex flex-row space-x-7">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="about-section flex justify-center" id="about">
        <div className="w-2/3 my-40 flex justify-between">
          <div className="w-2/3 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-10">
              Hello, my name is <span className="text-c-ruby">Calvin</span>.
            </h1>
            <p className="mb-5 mr-7">
              I'm currently a <span className="text-c-ruby">Junior</span> at the
              <span className="text-c-ruby">
                {" "}
                New York University Tandon School of Engineering
              </span>{" "}
              studying <span className="text-c-ruby">Computer Science</span> and
              minoring in <span className="text-c-ruby">Mathematics</span>.
            </p>
            <p className="mb-14 mr-7">
              My main interests lie in full stack and software development,
              machine learning, and artificial intelligence.
            </p>
            <p className="mr-7">
              Besides programming, I love Pokémon, watching YouTube, and
              spending time with family and friends.
            </p>
          </div>
          <div className="w-1/3 flex items-center">
            <div className="h-fit">
              <img
                src={photo}
                alt="Photo"
                className="object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="w-72" />
      </div>
      <section className="education-section flex justify-center" id="education">
        <div className="experience w-2/3 my-40 flex content-center flex-col">
          <header className="font-bold text-3xl mb-10">Education</header>
          <div className="flex flex-row justify-around">
            <div className="w-5/12">
              <div className="flex justify-center">
                <FaGraduationCap size={40} />
              </div>
              <h1 className="text-lg text-center">2016 - 2020</h1>
              <h1 className="text-xl text-center font-bold">
                Stuyvesant High School
              </h1>
              <p className="text-center">New York City, New York</p>
              <p className="font-bold text-center italic mb-5">
                Regents Diploma
              </p>
              <div className="flex justify-center">
                <hr className="w-1/2" />
              </div>
              <ol className="mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold text-c-ruby">GPA: </span>
                  <span className="italic">
                    <span className="font-bold">4.0 </span>/ 4.0
                  </span>
                </li>
                <li>
                  <span className="font-bold text-c-ruby">SAT: </span>
                  <span className="italic">
                    <span className="font-bold">1540 </span>/ 1600
                  </span>
                </li>
                <li>
                  <span className="font-bold text-c-ruby">
                    Relevant Courses Taken:{" "}
                  </span>
                  <span className="font-bold italic">
                    AP Computer Science A, System Level Programming, Software
                    Development, Computer Graphics{" "}
                  </span>
                </li>
              </ol>
            </div>

            <div className="w-5/12">
              <div className="flex justify-center">
                <FaUniversity size={40} />
              </div>
              <h1 className="text-lg text-center">2020 - 2024</h1>
              <h1 className="text-xl text-center font-bold">
                NYU Tandon School of Engineering
              </h1>
              <p className="text-center">Brooklyn, New York</p>
              <p className="font-bold text-center italic mb-5">
                B.S. in Computer Science, Minor in Mathematics
              </p>
              <div className="flex justify-center">
                <hr className="w-1/2" />
              </div>
              <ol className="mt-5 list-disc list-inside">
                <li>
                  <span className="font-bold text-c-ruby">GPA: </span>
                  <span className="italic">
                    <span className="font-bold">3.98 </span>/ 4.0
                  </span>
                </li>
                <li>
                  <span className="font-bold text-c-ruby">
                    Relevant Courses Taken:{" "}
                  </span>
                  <span className="font-bold italic">
                    Object Oriented Programming, Design & Analysis of
                    Algorithms, Computer Architecture and Organization, Discrete
                    Mathematics, Data Analysis, Linear Algebra and Differntial
                    Equations
                  </span>
                </li>
                <li>
                  <span className="font-bold text-c-ruby">
                    Current Relevant Courses:{" "}
                  </span>
                  <span className="font-bold italic">
                    Artificial Intelligence, Introduction to Machine Learning,
                    Introduction to Operating Systems, Calculus III:
                    Multi-dimensional Calculus
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-72" />
      </div>

      <section
        className="experience-section flex justify-center"
        id="experience"
      >
        <div className="experience w-2/3 my-40 flex content-center flex-col">
          <header className="font-bold text-3xl mb-10">Experience</header>
          <div className="flex justify-center">
            <div className="exp1 w-11/12 mb-10">
              <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
                <h1 className="font-bold mr-7">
                  Course Assistant for Programming and Problem Solving
                </h1>
                <span className="text-base text-right">Sep 2022 - Present</span>
              </div>
              <div className="exp-s2 italic mb-5">
                <h1>New York University</h1>
              </div>
              <div className="exp-s3">
                <ol className="list-disc list-inside">
                  <li>
                    Conducting 15+ office hours per week to assist students with
                    their homework, labs, and other course material concerns
                  </li>
                  <li>
                    Leading weekly labs with 60+ students and evaluating their
                    performance
                  </li>
                  <li>
                    Coordinating with other assistants and the professor to
                    ensure adequate instruction and management
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="exp1 w-11/12 mb-10">
              <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
                <h1 className="font-bold mr-7">Office Intern</h1>
                <span className="text-base text-right">
                  Jul 2019 - Aug 2019
                </span>
              </div>
              <div className="exp-s2 italic mb-5">
                <h1>Quality Touch, Inc. CDPAP Agency</h1>
              </div>
              <div className="exp-s3">
                <ol className="list-disc list-inside">
                  <li>Organized and maintained office records</li>
                  <li>
                    Streamlined access to company information through a process
                    of filing, scanning, and uploading documents to an online
                    database
                  </li>
                  <li>
                    Interacted with customers by dispatching and answering phone
                    calls
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-72" />
      </div>

      <section className="projects-section flex justify-center" id="projects">
        <div className="experience w-2/3 min-w-[900px] my-40 flex content-center flex-col">
          <header className="font-bold text-3xl mb-10">Projects</header>
          <div className="grid grid-cols-2 gap-8 auto-rows-fr">
            <div className="proj1 relative">
              <img src={p0} alt="p0" className="object-contain" />
              <a
                className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
                target="_blank"
                rel="noreferrer"
                href="https://inspiring-volhard-4b4ee7.netlify.app/"
              >
                <div>
                  <div className="proj-s1">
                    <h1 className="font-bold text-xl">Spacestagram</h1>
                  </div>
                  <hr className="w-1/2 mb-3"></hr>
                  <div className="proj-s2 mb-8">
                    <p>
                      A web app that allows users to view NASA's Astronomy
                      Picture of the Day and photos from NASA's Image and Video
                      Library. Users can search for photos and query them by a
                      range of dates, as well as like and unlike photos (likes
                      persist in localStorage).
                    </p>
                  </div>
                </div>
                <div className="proj-s3 bottom-0">
                  <p className="font-bold">React ∙ JSX ∙ CSS ∙ Netlify</p>
                </div>
              </a>
            </div>

            <div className="proj2 relative">
              <img src={p1} alt="p1" className="object-contain" />
              <a
                className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
                target="_blank"
                rel="noreferrer"
                href="https://meraatalgharb.com/"
              >
                <div>
                  <div className="proj-s1">
                    <h1 className="font-bold text-xl">Meraat Algharb</h1>
                  </div>
                  <hr className="w-1/2 mb-3"></hr>
                  <div className="proj-s2 mb-8">
                    <p>
                      The article website for the Arabic-language literature,
                      poetry, culture, and medicine magazine Meraat Algharb
                      ("Mirror of the West") owned by Dr. Kamal Taoube.
                    </p>
                  </div>
                </div>
                <div className="proj-s3 bottom-0">
                  <p className="font-bold">
                    HTML ∙ CSS (Sass) ∙ Python ∙ Django ∙ PostgreSQL ∙ cron ∙
                    nginx ∙ Gunicorn
                  </p>
                </div>
              </a>
            </div>

            <div className="proj3 relative">
              <img src={p2} alt="p2" className="object-contain" />
              <a
                className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nilffej/Handlebars"
              >
                <div>
                  <div className="proj-s1">
                    <h1 className="font-bold text-xl">Handlebars</h1>
                  </div>
                  <hr className="w-1/2 mb-3"></hr>
                  <div className="proj-s2 mb-8">
                    <p>
                      A web app that helps users locate and bookmark rental
                      bikes given a specified location. Users can also rate bike
                      companies which will be visible to other users. Uses the
                      City Bike, MapQuest Open Geocoding, and Metaweather APIs.
                    </p>
                  </div>
                </div>
                <div className="proj-s3 bottom-0">
                  <p className="font-bold">
                    HTML ∙ CSS (Bootstrap) ∙ Flask ∙ SQLite
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-72" />
      </div>

      <section className="skills-section flex justify-center" id="skills">
        <div className="experience w-2/3 min-w-[900px] my-40 flex content-center flex-col">
          <header className="font-bold text-3xl mb-10">Skills</header>
          <div className="mb-10">
            <p className="font-bold mb-5">Coding Languages</p>
            <div className="grid grid-cols-5 grid-flow-row gap-5">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={py} alt="Python" className="" />
                </div>
                <span>Python</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={cpp} alt="C++" className="" />
                </div>
                <span>C++</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={html} alt="HTML" className="" />
                </div>
                <span>HTML</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={css} alt="CSS" className="" />
                </div>
                <span>CSS</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={js} alt="JavaScript" className="" />
                </div>
                <span>JavaScript</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={c} alt="C" className="" />
                </div>
                <span>C</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={sql} alt="SQL" className="" />
                </div>
                <span>SQL</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={asm} alt="Assembly" className="w-[48px]" />
                </div>
                <span>Assembly</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={java} alt="Java" className="" />
                </div>
                <span>Java</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-5">Operating Systems</p>
            <div className="grid grid-cols-5 grid-flow-row">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={windows} alt="Windows" className="" />
                </div>
                <span>Windows</span>
              </div>

              <div className="flex items-center">
                <div className="mr-3">
                  <img src={linux} alt="Linux" className="" />
                </div>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-72" />
      </div>

      <section className="contact-section flex justify-center" id="contact">
        <div className="experience w-2/3 min-w-[900px] mt-40 flex content-center flex-col">
          <div>
            <h1 className="text-3xl font-bold text-center mb-5">
              Connect With Me!
            </h1>
            <div className="flex justify-center mb-5">
              <div className="flex items-center">
                <div className="m-5">
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:cc6923@nyu.edu"
                    onMouseOver={() => setColor0("black")}
                    onMouseOut={() => setColor0("white")}
                  >
                    <MdEmail
                      className="transition-all"
                      size={38}
                      color={color0}
                    />
                  </a>
                </div>

                <div className="m-5">
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/calvin-chu-283497222/"
                    onMouseOver={() => setColor1("black")}
                    onMouseOut={() => setColor1("white")}
                  >
                    <BsLinkedin
                      className="transition-all"
                      size={32}
                      color={color1}
                    />
                  </a>
                </div>

                <div className="m-5">
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/CalfinChoo"
                    onMouseOver={() => setColor2("black")}
                    onMouseOut={() => setColor2("white")}
                  >
                    <FaGithub
                      className="transition-all"
                      size={36}
                      color={color2}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mb-10">
              <p className="text-slate-400">
                Last updated on{" "}
                <span className="text-c-ruby">September 16, 2022</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
