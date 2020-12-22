import React from "react";
import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";
import Loader from "../../utils/Loader";
import LoaderTwo from "../../utils/LoaderTwo";

const buttonVariant = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
};
const Home = () => {
  return (
    <div
      data-aos="fade-up-left"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
    >
      <div
        id="home"
        className="flex flex-col-reverse overflow-x-hidden justify-between mb-6 md:mb-10 md:mt-15 md:flex-row"
      >
        <div className="px-4 mx-auto md:mt-32">
          <div>
            <div>
              <div className="mt-4 mb-2 text-2xl font-extrabold text-purple-600">
                {" "}
                <ReactTypingEffect
                  cursor=" "
                  typingDelay={4000}
                  eraseDelay={500000}
                  text="Hello, I am"
                />
              </div>
              <div className="text-lg font-extrabold text-purple-600">
                <ReactTypingEffect
                  cursor=" "
                  typingDelay={6000}
                  eraseDelay={500000}
                  text="SAMUEL  AYEGBUSI. "
                />
              </div>
              <div className="mb-8 font-bold text-purple-600 md:mr-3">
                <ReactTypingEffect
                  typingDelay={10000}
                  eraseDelay={500000}
                  text="I write codes on the frontend side."
                />
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="-mb-10">
              <Loader />
              <LoaderTwo />
            </div>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1MUK1s3-5dOBPK1DV4mytV95m_Pk9bie0/view?usp=drivesdk"
            >
              <motion.button
                class="bg-purple-400 text-white font-bold py-2 px-6 rounded inline-flex items-center"
                variants={buttonVariant}
                whileHover="hover"
                animate="visible"
              >
                <svg
                  className="w-4 h-4 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download Resume</span>
              </motion.button>
            </a>
          </div>
        </div>
        <div className=" lg:flex justify-start ">
          <img
            rel="preconnect"
            src="https://i.ibb.co/jLBwTM9/undraw-developer-activity-bv83.png"
            alt="man_operating_a_computer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
