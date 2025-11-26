import { Picture } from "../picture";
import { motion } from "framer-motion";
export default function Header() {
  return (
    <section
      className="relative flex flex-col items-center container"
      id="home"
    >
      <div className="grid grid-cols-12 w-full ">
        {/* Just text */}
        <div className="flex flex-col justify-center col-span-7 gap-5  ">
          <p className="font-semibold text-2xl">
            Hey, How goes it! it&apos;s me,
          </p>
          <p className="text-4xl lg:text-7xl uppercase font-extralight ">
            Yara.
          </p>
          <p className="lg:text-2xl font-light capitalize">
            I build neat stuff for the internet.
          </p>
          <p className="text-2xl lg:text-2xl  lg:font-extralight capitalize">
            I&apos;m a web-centric software developer, passionate
            problem-solver, and lifelong learning advocate.
            <br />
            <span className="text-red-700 uppercase">Fueled by curiosity.</span>
          </p>
        </div>
        <div className="justify-end col-start-9 col-span-4 hidden md:flex">
          <Picture />
        </div>
      </div>

      {/* accents */}
      <div className="flex justify-between items-start w-full ">
        <div className="flex items-center gap-[3px] font-extralight ">
          <motion.h2
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-bold text-5xl text-green-700 mb-1"
          >
            •
          </motion.h2>
          <p>Open to work. Hit me up.</p>
        </div>
        <div className="flex items-center gap-[2px] font-light -mt-10">
          <motion.h2
            animate={{ y: [-25, -5] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-bold text-4xl text-red-700"
          >
            &darr;
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
