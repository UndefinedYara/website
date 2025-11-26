import { motion } from "framer-motion";
import Link from "next/link";

export function Contact() {
  return (
    <footer
      className="container mt-1 flex flex-col gap-10 font-thin md:my-5 bg-transparent"
      id="contact"
    >
      <div className="w-full -mt-10 md:mt-0">
        <div className="flex items-center ">
          <p className="text-xl">GET INTO CONTACT</p>
          <motion.h2
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-bold text-8xl text-green-600 mb-3 ml-1"
          >
            •
          </motion.h2>
        </div>
        <p className=" text-3xl w-full md:text-7xl tracking-wide ">
          READY WHEN YOU ARE
        </p>
      </div>
      <div className="relative flex items-end justify-end gap-10 text-sm md:text-lg ">
        <p className="absolute left-0 text-xs">Made By Yara ❤️</p>

        <Link
          className="hover:text-primary hover:duration-600"
          href="/resume.pdf"
          target="_blank"
        >
          ✶Resume✶
        </Link>
        <Link
          className="hover:text-primary hover:duration-600"
          href="mailto:yarakhairat10@gmail.com"
        >
          ✶Email✶
        </Link>
      </div>
    </footer>
  );
}
