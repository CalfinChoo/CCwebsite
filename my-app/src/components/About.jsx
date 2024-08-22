import React from "react";
import { motion } from "framer-motion";
import photo from "../static/media/photo.jpg";

function About() {
  const name1 = "Hello, my name is";
  const name2 = "Calvin Chu. ";
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
    <section
      className="about-section flex justify-center font-arima"
      id="about"
    >
      <div className="lg:w-2/3 sm:w-3/4 w-5/6 max-w-[1000px] lg:my-48 sm:my-24 my-12 flex lg:justify-between lg:flex-row flex-col-reverse items-center">
        <div className="lg:w-2/3 sm:w-3/4 w-5/6 flex flex-col justify-center lg:text-left text-center">
          <h1 className="mb-10">
            <motion.div
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
              {name2
                .split("")
                .map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}
                      className="text-5xl font-extrabold text-c-ruby font-arimo"
                    >
                      {char}
                    </motion.span>
                  );
                })
                .concat([
                  <motion.div
                    key="wave"
                    variants={letter}
                    transition={{ duration: 0.5 }}
                    style={{ display: "inline-block" }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 20, -20, 20, -20, 0] }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        loop: Infinity,
                        repeatDelay: 1,
                      }}
                      className="text-5xl"
                    >
                      &#x1F44B;
                    </motion.div>
                  </motion.div>,
                ])}
            </motion.div>
          </h1>
          <motion.h2
            className="load-screen--message"
            variants={intro1}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg mb-7 lg:mr-7">
              I'm a{" "}
              <span className="font-bold text-c-ruby font-arimo">
                programmer
              </span>
              , enjoyer of all things problem-solving-related.
            </p>
          </motion.h2>
          <motion.h2
            className="load-screen--message"
            variants={intro2}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg mb-5 lg:mr-7">
              My main interests lie in{" "}
              <span className="font-bold text-c-ruby font-arimo">
                full stack
              </span>{" "}
              and{" "}
              <span className="font-bold text-c-ruby font-arimo">
                software development
              </span>
              ,
              <span className="font-bold text-c-ruby font-arimo">
                {" "}
                machine learning
              </span>
              , and{" "}
              <span className="font-bold text-c-ruby font-arimo">
                artificial intelligence
              </span>
              .
            </p>
          </motion.h2>
        </div>
        <div className="lg:w-1/3 sm:w-2/5 w-1/2 flex items-center pb-10 lg:pb-0">
          <div className="h-fit">
            <img src={photo} alt="me" className="object-contain rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
