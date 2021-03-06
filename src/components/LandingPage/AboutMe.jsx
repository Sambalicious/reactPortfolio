import React from "react";

const AboutMe = () => {
  return (
    <div
      data-aos="zoom-out-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-cubic"
      data-aos-duration="2000"
      className="overflow-x-hidden"
    >
      <div className="justify-center px-4 mx-6 mt-20  text-center md:flex">
        <div className="md:mr-5">
          <img
            rel="preconnect"
            loading="lazy"
            src="https://i.ibb.co/vZQy9dt/undraw-code-thinking-1jeh.png"
            alt="man_is_code_thinking"
          />
        </div>
        <div
          className="-mt-10  align-center md:mt-4"
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-cubic"
          data-aos-duration="1000"
          data-aos-delay="20"
        >
          <div className="mb-4 text-4xl font-extrabold hover:text-purple-400">
            About Me
          </div>
          <div className="mt-2 overflow-x-hidden text-purple-600">
            <p>
              I am a passionate, self taught web developer with keen interest in
              innovative design
            </p>
            <p>
              {" "}
              implementation and understanding of technique geared towards
              optimum user experience.
            </p>{" "}
          </div>

          <div
            className="text-purple-600 overflow-x-hidden"
            data-aos="slide-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="1000"
          >
            I am result driven, so, I attach great importance to everything I
            do.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
