import React from "react";
import { motion } from "framer-motion";
import photo from "../static/media/photo.jpg";

function About() {
  const name1 = "Hello, my name is";
  const name2 = "Calvin Chu. 👋";
  const greeting = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const intro1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
  };
  const intro2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
  };
  return (
    <section className="about-section flex justify-center" id="about">
      <div className="w-2/3 max-w-[1000px] my-48 flex justify-between">
        <div className="w-2/3 flex flex-col justify-center">
          <h1 className="mb-10">
            <motion.h1
              className="load-screen--message"
              variants={greeting}
              initial="hidden"
              animate="visible"
            >
              {name1.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={letter}
                    className="text-xl"
                  >
                    {char}
                  </motion.span>
                );
              })}
              <br />
              {name2.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={letter}
                    className="text-5xl font-bold text-c-ruby"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.h1>
          </h1>
          <motion.h2
            className="load-screen--message"
            variants={intro1}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg mb-7 mr-7">
              I'm currently a{" "}
              <span className="font-bold text-c-ruby">Junior</span> at the
              <span className="font-bold text-c-ruby">
                {" "}
                New York University Tandon School of Engineering
              </span>{" "}
              studying{" "}
              <span className="font-bold text-c-ruby">
                Computer Science
              </span>{" "}
              and minoring in{" "}
              <span className="font-bold text-c-ruby">Mathematics</span>.
            </p>
          </motion.h2>
          <motion.h2
            className="load-screen--message"
            variants={intro2}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg mb-5 mr-7">
              My main interests lie in{" "}
              <span className="font-bold text-c-ruby">full stack</span> and{" "}
              <span className="font-bold text-c-ruby">
                software development
              </span>
              ,<span className="font-bold text-c-ruby"> machine learning</span>,
              and{" "}
              <span className="font-bold text-c-ruby">
                artificial intelligence
              </span>
              .
            </p>
          </motion.h2>
        </div>
        <div className="w-1/3 flex items-center">
          <div className="h-fit">
            <img src={photo} alt="me" className="object-contain rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
