import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-8xl mx-auto ${styles.paddingX} flex flex-row items-start gap-3`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText}
          text-white`}
          >
            Hi, I'm <span className="text-[#915eff]">Neha </span>
          </h1>
          <div className="mt-2 text-white-100 text-xl lg:text-2xl leading-tight sm:text-xs sm:leading-normal">
            <span className="hidden sm:inline">
              a passionate developer specializing in <br />
              creating seamless user interfaces <br />
              and dynamic web applications.
            </span>

            <span className="sm:hidden">Front End Developer</span>
          </div>
        </div>
      </div>
      <div
        className="h-90 lg:h-50"
        style={{ bottom: "-52px", position: "absolute", right: "0px" }}
      >
        <img className="" src="./herologo.png" alt="image" />
      </div>

      <div className="absolute xs:bottom-5 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
