import React from "react";

function Experience() {
  return (
    <section className="experience-section flex justify-center" id="experience">
      <div className="experience my-40 flex content-center flex-col items-center w-7/12">
        <header className="font-bold text-3xl mb-10 text-center font-chango">
          Experience
        </header>
        <div className="flex justify-center w-full">
          <div className="exp1 mb-10 w-full">
            <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
              <h1 className="font-bold mr-7">Software Developer</h1>
              <span className="text-base text-right text-c-ruby font-bold">
                Aug 2024 - Present
              </span>
            </div>
            <div className="exp-s2 italic mb-5">
              <h1>BNY</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="exp1 mb-10 w-full">
            <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
              <h1 className="font-bold mr-7">Teaching Assistant</h1>
              <span className="text-base text-right text-c-ruby font-bold">
                Sep 2022 - May 2024
              </span>
            </div>
            <div className="exp-s2 italic mb-5">
              <h1>New York University</h1>
            </div>
            <div className="exp-s3">
              <ol className="list-disc list-inside">
                <li>
                  Supported 480 students in Programming and Problem Solving
                  through leading weekly Python labs, hosting 10.5 office hours
                  per week, and coordinating with faculty to optimize
                  instruction
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="exp1 mb-10 w-full">
            <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
              <h1 className="font-bold mr-7">Software Developer Intern</h1>
              <span className="text-base text-right text-c-ruby font-bold">
                Jun 2023 - Aug 2023
              </span>
            </div>
            <div className="exp-s2 italic mb-5">
              <h1>BNY Mellon</h1>
            </div>
            <div className="exp-s3">
              <ol className="list-disc list-inside">
                <li>
                  Developed a Python program for retrieving vendor data and
                  calculating metrics, ensuring vendor accuracy and securities
                  coverage against the golden copy data
                </li>
                <li>
                  Built a Flask-based visualization tool to help employees and
                  stakeholders quickly understand vendor performance and
                  coverage insights
                </li>
                <li>
                  Enhanced code quality by contributing JUnit modules to the
                  DevOps initiative, while efficiently participating in Agile
                  sprints and delivering on JIRA tickets
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="exp1 mb-10 w-full">
            <div className="text-lg exp-s1 flex flex-row justify-between mb-1">
              <h1 className="font-bold mr-7">Office Intern</h1>
              <span className="text-base text-right text-c-ruby font-bold">
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
