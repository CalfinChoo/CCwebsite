import photo from "./photo.jpg";
import p0 from "./p0.PNG";
import p1 from "./p1.PNG";
import p2 from "./p2.PNG";
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import React from "react";

function App() {
  return (
    <div className="text-white bg-c-purple">
      <header className="flex justify-around py-10 sticky top-0 bg-c-purple border-b-2 border-b-c-ruby z-50">
        <span>Calvin Chu</span>
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
            <p className="mb-10 mr-7">
              I'm currently a Junior at the New York University Tandon School of
              Engineering studying Computer Science and minoring in Mathematics.
            </p>
            <p className="mr-7">
              My main interests lie in full stack and software development,
              machine learning, and artificial intelligence.
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
          <FaGraduationCap size={40}/>
          </div>
          <h1 className="text-lg text-center">2016 - 2020</h1>
          <h1 className="text-xl text-center font-bold">Stuyvesant High School</h1>
          <p className="font-bold text-center italic mb-5">Regents Diploma</p>
          <hr></hr>
          <ol className="mt-5 list-disc list-inside">
            <li className="text-center"><span className="text-c-ruby">GPA: </span>
              <span className="italic">
                <span className="font-bold">4.0</span>/4.0
              </span>
            </li>
            <li className="text-center"><span className="text-c-blue">SAT: </span>
            <span className="italic">
              <span className="font-bold">1540</span>/1600
              </span>
            </li>
            <li className="text-center">
                <span className="text-c-green">Relevant Coursework: </span>
                <span className="font-bold italic">AP Computer Science A, System Level Programming, Software Development, Computer Graphics </span>
            </li>
          </ol>
        </div>

        <div className="w-6/12">
          <div className="flex justify-center">
          <FaUniversity size={40}/>
          </div>
          <h1 className="text-lg text-center">2020 - 2024</h1>
          <h1 className="text-xl text-center font-bold">NYU Tandon School of Engineering</h1>
          <p className="font-bold text-center italic mb-5">B.S. in Computer Science, Minor in Mathematics</p>
          <hr></hr>
          <ol className="mt-5 list-disc list-inside">
            <li className="text-center"><span className="text-c-ruby">GPA: </span>
              <span className="italic">
                <span className="font-bold">3.98</span>/4.0
              </span>
            </li>
            <li className="text-center">
                <span className="text-c-blue">Relevant Coursework: </span>
                <span className="font-bold italic">Object Oriented Programming, Design & Analysis of Algorithms, 
                Computer Architecture and Organization, Discrete Mathematics, Data Analysis, Linear Algebra and 
                Differntial Equations</span>
            </li>
            <li className="text-center">
                <span className="text-c-green">Current Coursework: </span>
                <span className="font-bold italic">Artificial Intelligence, Introduction to Machine Learning, 
                Introduction to Operating Systems, Calculus III: Multi-dimensional Calculus</span>
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
                <span className="text-base text-right">Jul 2019 - Aug 2019</span>
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
          <img 
            src={p0}
            alt="p0"
            className="object-contain"
          />
          <a className="p-5 h-full transition-all absolute bg-black/50 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
          target="_blank"
          rel="noreferrer"
          href='https://inspiring-volhard-4b4ee7.netlify.app/'>
          <div>
            <div className="proj-s1">
              <h1 className="font-bold text-xl">Spacestagram</h1>
            </div>
            <hr className="w-1/2 mb-3"></hr>
            <div className="proj-s2 mb-8">
              <p>
              A web app that allows users to view NASA's Astronomy Picture of the Day and photos from NASA's Image and Video Library.
              Users can search for photos and query them by a range of dates, as well as like and unlike photos (likes persist in localStorage).
              </p>
            </div>
          </div>
          <div className="proj-s3 bottom-0">
            <p className="font-bold">React ∙ JSX ∙ CSS ∙ Netlify</p>
          </div>
          </a> 
        </div>

        <div className="proj2 relative">
          <img 
            src={p1}
            alt="p1"
            className="object-contain"
          />
          <a className="p-5 h-full transition-all absolute bg-black/50 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
          target="_blank"
          rel="noreferrer"
          href='https://meraatalgharb.com/'>
          <div>
            <div className="proj-s1">
              <h1 className="font-bold text-xl">Meraat Algharb</h1>
            </div>
            <hr className="w-1/2 mb-3"></hr>
            <div className="proj-s2 mb-8">
              <p>
              The article website for the Arabic-language literature, poetry,
              culture, and medicine magazine Meraat Algharb ("Mirror of the
              West") owned by Dr. Kamal Taoube.
              </p>
            </div>
          </div>
          <div className="proj-s3 bottom-0">
            <p className="font-bold">HTML ∙ CSS (Sass) ∙ Python ∙ Django ∙ PostgreSQL ∙ cron ∙ nginx ∙ Gunicorn</p>
          </div>
          </a>
        </div>

        <div className="proj3 relative">
          <img 
            src={p2}
            alt="p2"
            className="object-contain"
          />
          <a className="p-5 h-full transition-all absolute bg-black/50 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
          target="_blank"
          rel="noreferrer"
          href='https://github.com/nilffej/Handlebars'>
          <div>
            <div className="proj-s1">
              <h1 className="font-bold text-xl">Handlebars</h1>
            </div>
            <hr className="w-1/2 mb-3"></hr>
            <div className="proj-s2 mb-8">
              <p>
              A web app that helps users locate and bookmark rental bikes given
              a specified location.  Users can also rate bike companies which will be visible to other users.
              Uses the City Bike, MapQuest Open Geocoding, and Metaweather APIs.
              </p>
            </div>
          </div>
          <div className="proj-s3 bottom-0">
            <p className="font-bold">HTML ∙ Bootstrap ∙ Flask ∙ SQLite</p>
          </div>
          </a>
        </div>

        </div>

      </div>
      </section>
      <section className="skills-section flex justify-center bg-red-500" id="skills">
        <div className="experience w-2/3 min-w-[900px] my-40 flex content-center flex-col">
          <header className="font-bold text-3xl mb-10">Skills</header>
          <p>Coding Languages:</p>
        <p>Operating Systems:</p>
        </div>
      </section>
      <section className="contact-section bg-blue-300" id="contact">
        <p>Contact</p>
      </section>
    </div>
  );
}

export default App;
