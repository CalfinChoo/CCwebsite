import photo from "./photo.jpg";
import React from "react";

function App() {
  return (
    <div className="text-white bg-c-purple">
      <header className="flex justify-around py-10 sticky top-0 bg-c-purple border-b-2 border-b-c-ruby">
        <span>Calvin Chu</span>
        <nav className="flex">
          <ul className="flex flex-row space-x-7">
            <li>
              <a href="#about">About</a>
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
      <section
        className="experience-section flex justify-center"
        id="experience"
      >
        <div className="experience w-2/3 my-20 flex content-center flex-col">
          <header className="font-bold text-3xl mb-10">Experience</header>
          <div className="flex justify-center">
            <div className="exp1 min-w-fit w-11/12 mb-10">
              <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
                <h1 className="font-bold mr-7">
                  Course Assistant for Programming and Problem Solving
                </h1>
                <span className="text-base">Sep 2022 - Present</span>
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
            <div className="exp1 min-w-fit w-11/12 mb-10">
              <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
                <h1 className="font-bold mr-7">Office Intern</h1>
                <span className="text-base">Jul 2019 - Aug 2019</span>
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

      <section className="projects-section bg-blue-300" id="projects">
        <div className="proj1">
          <div className="proj-s1">
            <h1>Spacestagram</h1>
          </div>
          <div className="proj-s2">
            <p>
              A web app that allows users to view NASA's Astronomy Picture of
              the Day and photos from NASA's Image and Video Library
            </p>
          </div>
          <div className="proj-s3">
            <p>React, JSX, CSS, Netlify</p>
          </div>
        </div>

        <div className="proj2">
          <div className="proj-s1">
            <h1>Meraat Algharb</h1>
          </div>
          <div className="proj-s2">
            <p>
              The article website for the Arabic-language literature, poetry,
              culture, and medicine magazine Meraat Algharb ("Mirror of the
              West") owned by Dr. Kamal Taoube
            </p>
          </div>
          <div className="proj-s3">
            <p>
              HTML, CSS (Sass), Python, Django, PostgreSQL, cron, nginx,
              Gunicorn
            </p>
          </div>
        </div>

        <div className="proj3">
          <div className="proj-s1">
            <h1>Handlebars</h1>
          </div>
          <div className="proj-s2">
            <p>
              A web app that helps users locate and bookmark rental bikes given
              a specified location
            </p>
          </div>
          <div className="proj-s3">
            <p>HTML, Bootstrap, Flask, SQLite</p>
          </div>
        </div>
      </section>
      <section className="skills-section bg-red-500" id="skills">
        <p>Coding Languages:</p>
        <p>Operating Systems:</p>
      </section>
      <section className="contact-section bg-blue-300" id="contact">
        <p>Contact</p>
      </section>
    </div>
  );
}

export default App;
