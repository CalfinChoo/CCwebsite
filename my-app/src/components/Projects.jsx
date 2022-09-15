import React from "react";
import p0 from "../static/media/p0.PNG";
import p1 from "../static/media/p1.PNG";
import p2 from "../static/media/p2.PNG";
import p3 from "../static/media/p3.PNG";

function Projects() {
    return(
        <section className="projects-section flex justify-center" id="projects">
        <div className="experience w-2/3 min-w-[900px] my-40 flex content-center flex-col">
          <header className="font-bold text-3xl mb-10">Projects</header>
          <div className="grid grid-cols-2 gap-8 auto-rows-fr">
            <div className="proj1 relative">
              <img src={p0} alt="p0" className="object-contain" />
              <a
                className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
                target="_blank"
                rel="noreferrer"
                href="https://inspiring-volhard-4b4ee7.netlify.app/"
              >
                <div>
                  <div className="proj-s1">
                    <h1 className="font-bold text-xl">Spacestagram</h1>
                  </div>
                  <hr className="w-1/2 mb-3"></hr>
                  <div className="proj-s2">
                    <p>
                      A web app that allows users to view NASA's Astronomy
                      Picture of the Day and photos from NASA's Image and Video
                      Library. Users can search for photos and query them by a
                      range of dates, as well as like and unlike photos (likes
                      persist in localStorage).
                    </p>
                  </div>
                </div>
                <div className="proj-s3">
                  <p className="font-bold">React ∙ JSX ∙ CSS ∙ Netlify</p>
                </div>
              </a>
            </div>

            <div className="proj2 relative">
              <img src={p1} alt="p1" className="object-contain" />
              <a
                className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
                target="_blank"
                rel="noreferrer"
                href="https://meraatalgharb.com/"
              >
                <div>
                  <div className="proj-s1">
                    <h1 className="font-bold text-xl">Meraat Algharb</h1>
                  </div>
                  <hr className="w-1/2 mb-3"></hr>
                  <div className="proj-s2">
                    <p>
                      The article website for the Arabic-language literature,
                      poetry, culture, and medicine magazine Meraat Algharb
                      ("Mirror of the West") owned by Dr. Kamal Taoube.
                    </p>
                  </div>
                </div>
                <div className="proj-s3">
                  <p className="font-bold">
                    HTML ∙ CSS (Sass) ∙ Python ∙ Django ∙ PostgreSQL ∙ cron ∙
                    nginx ∙ Gunicorn
                  </p>
                </div>
              </a>
            </div>

            <div className="proj3 relative">
              <img src={p2} alt="p2" className="object-contain" />
              <a
                className="p-5 h-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/nilffej/Handlebars"
              >
                <div>
                  <div className="proj-s1">
                    <h1 className="font-bold text-xl">Handlebars</h1>
                  </div>
                  <hr className="w-1/2 mb-3"></hr>
                  <div className="proj-s2">
                    <p>
                      A web app that helps users locate and bookmark rental
                      bikes given a specified location. Users can also rate bike
                      companies which will be visible to other users. Uses the
                      City Bike, MapQuest Open Geocoding, and Metaweather APIs.
                    </p>
                  </div>
                </div>
                <div className="proj-s3">
                  <p className="font-bold">
                    HTML ∙ CSS (Bootstrap) ∙ Flask ∙ SQLite
                  </p>
                </div>
              </a>
            </div>

            <div className="proj4 relative">
              <img src={p3} alt="p3" className="object-contain" />
              <a
                className="p-5 h-full w-full transition-all absolute bg-black/60 top-0 left-0 opacity-0 hover:opacity-100 cursor-pointer flex flex-col justify-between"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/CalfinChoo/CCwebsite"
              >
                <div>
                  <div className="proj-s1">
                    <h1 className="font-bold text-xl">Portfolio</h1>
                  </div>
                  <hr className="w-1/2 mb-3"></hr>
                  <div className="proj-s2">
                    <p>
                      My personal website.
                    </p>
                  </div>
                </div>
                <div className="proj-s3">
                  <p className="font-bold">
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