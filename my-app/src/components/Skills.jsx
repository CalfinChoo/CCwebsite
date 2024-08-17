import React from "react";
import py from "../static/media/python.svg";
import cpp from "../static/media/cpp.svg";
import html from "../static/media/html.svg";
import css from "../static/media/css.svg";
import js from "../static/media/js.svg";
import c from "../static/media/c.svg";
import sql from "../static/media/sql.svg";
import asm from "../static/media/asm.svg";
import java from "../static/media/java.svg";
import windows from "../static/media/windows.svg";
import linux from "../static/media/linux.png";

function Skills() {
  return (
    <section className="skills-section flex justify-center" id="skills">
      <div className="experience w-2/3 min-w-[900px] my-40 flex content-center flex-col">
        <header className="font-bold text-3xl mb-10 text-center font-chango">
          Skills
        </header>
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
  );
}

export default Skills;
