import React from "react";
import Typewriter from 'typewriter-effect';
import photo from "../static/media/photo.jpg";

function About() {
    return(
        <section className="about-section flex justify-center" id="about">
        <div className="w-2/3 max-w-[1000px] my-40 flex justify-between">
          <div className="w-2/3 flex flex-col justify-center">
            <h1 className="font-bold mb-10 flex items-end">
              <span className="text-xl mr-2">Hello, my name is</span>
              {/* <span className="text-5xl text-c-ruby">Calvin Chu.</span> */}
              <span className="text-5xl text-c-ruby">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                  .typeString('Calvin')
                  .pauseFor(600)
                  .typeString('.')
                  .start();
                }}
              />
              </span>
            </h1>
            <p className="text-lg mb-7 mr-7">
              I'm currently a <span className="font-bold text-c-ruby">Junior</span> at the
              <span className="font-bold text-c-ruby">
                {" "}
                New York University Tandon School of Engineering
              </span>{" "}
              studying <span className="font-bold text-c-ruby">Computer Science</span> and
              minoring in <span className="font-bold text-c-ruby">Mathematics</span>.
            </p>
            <p className="text-lg mb-5 mr-7">
              My main interests lie in <span className="font-bold text-c-ruby">full stack</span> and <span className="font-bold text-c-ruby">software development</span>,
              <span className="font-bold text-c-ruby"> machine learning</span>, and <span className="font-bold text-c-ruby">artificial intelligence</span>.
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
    );
}

export default About;