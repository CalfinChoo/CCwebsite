import React from "react";
import p0 from "../static/media/p0.PNG";
import p1 from "../static/media/p1.PNG";
import p2 from "../static/media/p2.PNG";
import p3 from "../static/media/p3.PNG";
import p4 from "../static/media/p4.PNG";
import p5 from "../static/media/p5.PNG";

function Projects() {
  return (
    <section className="projects-section flex justify-center" id="projects">
      <div className="experience lg:w-2/3 sm:w-3/4 w-5/6 my-40 flex content-center flex-col">
        <header className="font-bold text-3xl mb-10 text-center font-chango">
          Projects
        </header>
        <div className="grid lg:grid-cols-2 gap-8 auto-rows-fr">
          <div className="proj6 relative rounded-xl border-4 border-c-ruby overflow-hidden bg-black flex items-center">
            <img src={p5} alt="p5" className="object-contain" />
            <a
              className="p-5 h-full w-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between overflow-y-scroll no-scrollbar"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/CalfinChoo/Trivial"
            >
              <div>
                <div className="proj-s1">
                  <h1 className="font-bold lg:text-xl sm:text-lg text-md">
                    Trivial
                  </h1>
                </div>
                <hr className="w-1/2 mb-3"></hr>
                <div className="proj-s2">
                  <p className="sm:text-base text-sm">
                    A gameshow quiz game powered by Gemini to create trivia
                    questions and answers (Vercel link on github).
                  </p>
                </div>
              </div>
              <div className="proj-s3">
                <p className="font-bold sm:text-base text-sm">
                  Python ∙ Angular ∙ HTML ∙ CSS ∙ FastAPI ∙ Firebase ∙ Firestore
                  ∙ Socket.io
                </p>
              </div>
            </a>
          </div>

          <div className="proj1 relative rounded-xl border-4 border-c-ruby overflow-hidden bg-black flex items-center">
            <img src={p0} alt="p0" className="object-contain" />
            <a
              className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between overflow-y-scroll no-scrollbar"
              target="_blank"
              rel="noreferrer"
              href="https://inspiring-volhard-4b4ee7.netlify.app/"
            >
              <div>
                <div className="proj-s1">
                  <h1 className="font-bold lg:text-xl sm:text-lg text-md">
                    Spacestagram
                  </h1>
                </div>
                <hr className="w-1/2 mb-3"></hr>
                <div className="proj-s2">
                  <p className="sm:text-base text-sm">
                    A web app that allows users to view NASA's Astronomy Picture
                    of the Day and photos from NASA's Image and Video Library.
                    Users can search for photos and query them by a range of
                    dates, as well as like and unlike photos (likes persist in
                    localStorage).
                  </p>
                </div>
              </div>
              <div className="proj-s3">
                <p className="font-bold sm:text-base text-sm">
                  React ∙ JSX ∙ CSS
                </p>
              </div>
            </a>
          </div>

          <div className="proj2 relative rounded-xl border-4 border-c-ruby overflow-hidden bg-black flex items-center">
            <img src={p1} alt="p1" className="object-contain" />
            <a
              className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between overflow-y-scroll no-scrollbar"
              target="_blank"
              rel="noreferrer"
              href="https://meraatalgharb.com/"
            >
              <div>
                <div className="proj-s1">
                  <h1 className="font-bold lg:text-xl sm:text-lg text-md">
                    Meraat Algharb
                  </h1>
                </div>
                <hr className="w-1/2 mb-3"></hr>
                <div className="proj-s2">
                  <p className="sm:text-base text-sm">
                    The article website for the Arabic-language literature,
                    poetry, culture, and medicine magazine Meraat Algharb
                    ("Mirror of the West") owned by Dr. Kamal Taoube.
                  </p>
                </div>
              </div>
              <div className="proj-s3">
                <p className="font-bold sm:text-base text-sm">
                  Python ∙ Django ∙ HTML ∙ CSS (Sass) ∙ PostgreSQL ∙ cron ∙
                  nginx ∙ Gunicorn
                </p>
              </div>
            </a>
          </div>

          <div className="proj3 relative rounded-xl border-4 border-c-ruby overflow-hidden bg-black flex items-center">
            <img src={p2} alt="p2" className="object-contain" />
            <a
              className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between overflow-y-scroll no-scrollbar"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/CalfinChoo/Handlebars"
            >
              <div>
                <div className="proj-s1">
                  <h1 className="font-bold lg:text-xl sm:text-lg text-md">
                    Handlebars
                  </h1>
                </div>
                <hr className="w-1/2 mb-3"></hr>
                <div className="proj-s2">
                  <p className="sm:text-base text-sm">
                    A web app that helps users locate and bookmark rental bikes
                    given a specified location. Users can also rate bike
                    companies which will be visible to other users. Uses the
                    City Bike, MapQuest Open Geocoding, and Metaweather APIs.
                  </p>
                </div>
              </div>
              <div className="proj-s3">
                <p className="font-bold sm:text-base text-sm">
                  HTML ∙ CSS (Bootstrap) ∙ Flask ∙ SQLite
                </p>
              </div>
            </a>
          </div>

          <div className="proj5 relative rounded-xl border-4 border-c-ruby overflow-hidden bg-black flex items-center">
            <img src={p4} alt="p4" className="object-contain" />
            <a
              className="p-5 h-full w-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between overflow-y-scroll no-scrollbar"
              target="_blank"
              rel="noreferrer"
              href="https://keen-malabi-b8ebfc.netlify.app/"
            >
              <div>
                <div className="proj-s1">
                  <h1 className="font-bold lg:text-xl sm:text-lg text-md">
                    Hao's Platforming Journey
                  </h1>
                </div>
                <hr className="w-1/2 mb-3"></hr>
                <div className="proj-s2">
                  <p className="sm:text-base text-sm">
                    A HTML canvas-based platformer inspired by the game{" "}
                    <span className="italic">Celeste</span> that I made for fun.
                  </p>
                </div>
              </div>
              <div className="proj-s3">
                <p className="font-bold sm:text-base text-sm">
                  HTML ∙ CSS ∙ JS
                </p>
              </div>
            </a>
          </div>

          <div className="proj4 relative rounded-xl border-4 border-c-ruby overflow-hidden bg-black flex items-center">
            <img src={p3} alt="p3" className="object-contain" />
            <a
              className="p-5 h-full w-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between overflow-y-scroll no-scrollbar"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/CalfinChoo/CCwebsite"
            >
              <div>
                <div className="proj-s1">
                  <h1 className="font-bold lg:text-xl sm:text-lg text-md">
                    Portfolio
                  </h1>
                </div>
                <hr className="w-1/2 mb-3"></hr>
                <div className="proj-s2">
                  <p className="sm:text-base text-sm">You are here!</p>
                </div>
              </div>
              <div className="proj-s3">
                <p className="font-bold sm:text-base text-sm">
                  React ∙ JSX ∙ CSS ∙ Tailwind CSS
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
