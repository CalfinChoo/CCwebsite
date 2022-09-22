import React from "react";

function Experience() {
  return (
    <section className="experience-section flex justify-center" id="experience">
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
                  Leading weekly labs in which 60+ students receive lecture,
                  supervision, and evaluation on their work
                </li>
                <li>
                  Coordinating with the professor and other assistants to ensure
                  best instruction and management
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
                  Streamlined access to company information through a process of
                  filing, scanning, and uploading documents to an online
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
  );
}

export default Experience;
