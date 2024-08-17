import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <section className="education-section flex justify-center" id="education">
      <div className="experience w-2/3 my-40 flex content-center flex-col">
        <header className="font-bold text-3xl mb-10 font-chango text-center">
          Education
        </header>
        <div className="flex flex-col items-center">
          <div className="w-3/4 border-2 border-white rounded-xl p-4 ease-out duration-300 hover:w-5/6">
            <div className="flex justify-center">
              <FaGraduationCap size={40} />
            </div>
            <h1 className="text-lg text-center">2016 - 2020</h1>
            <h1 className="text-xl text-center font-bold">
              Stuyvesant High School
            </h1>
            <p className="text-center">New York City, New York</p>
            <p className="font-bold text-center italic mb-5">
              Advanced Regents Diploma
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
                  Relevant Courses:{" "}
                </span>
                <span className="italic">
                  AP Computer Science A, System Level Programming, Software
                  Development, Computer Graphics{" "}
                </span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col items-center my-4">
            <div className="w-8 h-8 border-4 border-white rounded-full"></div>
            <div className="w-0 h-20 border-x-2 border-dotted"></div>
            <div className="w-8 h-8 border-4 border-white rounded-full"></div>
          </div>

          <div className="w-3/4 border-2 border-white rounded-xl p-4 ease-out duration-300 hover:w-5/6">
            <div className="flex justify-center">
              <FaGraduationCap size={40} />
            </div>
            <h1 className="text-lg text-center">2020 - 2024</h1>
            <h1 className="text-xl text-center font-bold">
              NYU Tandon School of Engineering
            </h1>
            <p className="text-center">Brooklyn, New York</p>
            <p className="font-bold text-center italic">
              B.S. in Computer Science, Minor in Mathematics
            </p>
            <p className="font-bold text-center italic mb-5">
              Graduated summa cum laude
            </p>
            <div className="flex justify-center">
              <hr className="w-1/2" />
            </div>
            <ol className="mt-5 list-disc list-inside">
              <li>
                <span className="font-bold text-c-ruby">GPA: </span>
                <span className="italic">
                  <span className="font-bold">3.96 </span>/ 4.0
                </span>
              </li>
              <li>
                <span className="font-bold text-c-ruby">Honors: </span>
                <span className="font-bold italic">
                  Founder's Day Award, Dean's List 2020-2024
                </span>
              </li>
              <li>
                <span className="font-bold text-c-ruby">
                  Relevant Courses:{" "}
                </span>
                <span className="italic">
                  Object Oriented Programming, Design & Analysis of Algorithms,
                  Computer Architecture and Organization, Data Analysis, Linear
                  Algebra and Differential Equations, Artificial Intelligence,
                  Introduction to Machine Learning, Introduction to Operating
                  Systems, Software Engineering, Design Project, Visualization
                  for Machine Learning, Intro to Web Development, Digital Logic
                  & State Machine Design, Game Development, Fundamentals of Data
                  Science
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
