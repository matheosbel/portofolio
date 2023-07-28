import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import TypeWriter from "typewriter-effect";

const Landing = ({ setSelectedPage }) => {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className={`md:flex md:justify-between md:items-center md:h-full gap-16 py-10 `}
    >
      {/* IMAGE SECTION WE DO THE IMAGE FIRST */}
      <div
        className={`md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32`}
      >
        {isAboveLargeScreens ? (
          <div
            className={`relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
        before:rounded-t-[400px] before:w-full before:max-w-[400px]
        before:h-full 
        before:border-2 before:border-blue before:z-[-1] 
        `}
          >
            <img
              className={` transition duration-200 z-10 w-full]
                     max-w-[400px] md:max-w-[600px] rounded-t-full
            `}
              src="../assets/matheos.jpg"
              alt="profile"
            />
          </div>
        ) : (
          <img
            className={`transition duration-200 z-10 w-full
                     max-w-[400px] md:max-w-[600px] rounded-t-full
            `}
            src="../assets/matheos.jpg"
            alt="profile"
          />
        )}
      </div>
      {/* The main section */}
      <div className={`z-30 basis-2/5 mt-12 md:mt-32  `}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            className={`text-6xl  z-10 text-center md:text-start font-playfair`}
          >
            Matheos {""}
            <span
              className={`xs:relative xs:text-deep-blue xs:font-semibold z-20
                    xs:before:content-brush before:absolute before:-left-[25px] text-red
                    before:-top-[70px] before:z-[-1] 
                    `}
            >
              Belay
            </span>
          </p>
          <p className={`mt-7 mb-4 text-[23px] text-center md:text-start`}>
            Hello! What we  <span className={`text-red`}>Build</span>{" "}
          </p>
          <div
            className={`text-[24px] text-red mt-3 mb-3 text-center md:text-start `}
          >
            I am{" "}
            <TypeWriter
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "RESPONSIVE WEBSITES !",
                  "NATIVE MOBILE APPLICATION !",
                  "UI/UX DESIGNING!",
                ],
              }}
            />
          </div>
        </motion.div>
        {/* call to action */}
        <motion.div
          className={`flex mt-5 justify-center md:justify-start`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className={`bg-gradient-rainblue text-deep-blue rounded-sm py-3  px-7 font-semibold
                    hover:bg-blue hover:text-white transition duration-500
                    `}
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <button>Contact me</button>
          </AnchorLink>
          <AnchorLink
            className={`rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5
                    `}
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500
                        w-full h-full flex items-center justify-center font-playfair px-10
                        "
            >
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
