import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
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
                  Object Oriented Programming, Design & Analysis of Algorithms,
                  Computer Architecture and Organization, Discrete Mathematics,
                  Data Analysis, Linear Algebra and Differntial Equations
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
  );
}

export default Education;
