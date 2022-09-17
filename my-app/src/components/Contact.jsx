import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
    const [color0, setColor0] = useState("white");
    const [color1, setColor1] = useState("white");
    const [color2, setColor2] = useState("white");
    return(
        <section className="contact-section flex justify-center" id="contact">
        <div className="experience w-2/3 min-w-[900px] mt-40 flex content-center flex-col">
          <div>
            <h1 className="text-3xl font-bold text-center mb-5">
              Connect With Me!
            </h1>
            <div className="flex justify-center mb-5">
              <div className="flex items-center">
                <div className="m-5">
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:cc6923@nyu.edu"
                    onMouseOver={() => setColor0("#E0115F")}
                    onMouseOut={() => setColor0("white")}
                  >
                    <MdEmail
                      className="transition-all"
                      size={38}
                      color={color0}
                    />
                  </a>
                </div>

                <div className="m-5">
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/calvin-chu-283497222/"
                    onMouseOver={() => setColor1("#E0115F")}
                    onMouseOut={() => setColor1("white")}
                  >
                    <BsLinkedin
                      className="transition-all"
                      size={32}
                      color={color1}
                    />
                  </a>
                </div>

                <div className="m-5">
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/CalfinChoo"
                    onMouseOver={() => setColor2("#E0115F")}
                    onMouseOut={() => setColor2("white")}
                  >
                    <FaGithub
                      className="transition-all"
                      size={36}
                      color={color2}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mb-10">
              <p className="text-slate-400">
                Last updated on{" "}
                <span className="text-c-ruby">September 17, 2022</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;